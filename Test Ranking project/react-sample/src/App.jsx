import React, { useState, useCallback, useRef } from 'react';
import { CATEGORIES, pickRandom10, loadState, saveState } from './data/categories';
import CategoryPicker from './components/CategoryPicker';
import Tray from './components/Tray';
import TierRow from './components/TierRow';
import DetailsModal from './components/DetailsModal';

const TIERS = ['S', 'A', 'B', 'C'];

function App() {
  const [state, setState] = useState(() => {
    const saved = loadState();
    if (saved) {
      return saved;
    }
    return {
      category: 'systemdesign',
      items: pickRandom10('systemdesign'),
      placements: {},
    };
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const draggedChipRef = useRef(null);
  const touchDraggedChipRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const itemsMapRef = useRef(() => {
    const map = new Map();
    state.items.forEach(item => map.set(item.id, item));
    return map;
  });

  const updateState = useCallback((newState) => {
    setState(newState);
    saveState(newState);
  }, []);

  const movePlacement = useCallback((itemId, newTier) => {
    setState(prev => {
      const updated = {
        ...prev,
        placements: {
          ...prev.placements,
          [itemId]: newTier,
        },
      };
      saveState(updated);
      return updated;
    });
  }, []);

  const handleSwitchCategory = useCallback((categoryId) => {
    updateState({
      category: categoryId,
      items: pickRandom10(categoryId),
      placements: {},
    });
    setSelectedItem(null);
  }, [updateState]);

  const handleShuffle = useCallback(() => {
    updateState({
      ...state,
      items: pickRandom10(state.category),
      placements: {},
    });
  }, [state, updateState]);

  const handleReset = useCallback(() => {
    updateState({
      ...state,
      placements: {},
    });
  }, [state, updateState]);

  const handleDragStart = useCallback((e, itemId) => {
    draggedChipRef.current = itemId;
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.classList.add('dragging');
  }, []);

  const handleDragEnd = useCallback((e) => {
    draggedChipRef.current = null;
    e.currentTarget.classList.remove('dragging');
    document.querySelectorAll('.tier-row, .chips-scroll').forEach(el => {
      el.classList.remove('drag-over');
    });
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drag-over');
  }, []);

  const handleDragLeave = useCallback((e) => {
    if (e.currentTarget === e.target) {
      e.currentTarget.classList.remove('drag-over');
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    if (draggedChipRef.current) {
      const tier = e.currentTarget.dataset.tier;
      movePlacement(draggedChipRef.current, tier || null);
    }
  }, [movePlacement]);

  const handleTouchStart = useCallback((e, itemId) => {
    touchDraggedChipRef.current = itemId;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchDraggedChipRef.current) return;
  }, []);

  const handleTouchEnd = useCallback((e, itemId) => {
    if (!touchDraggedChipRef.current) return;
    const touch = e.changedTouches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const tierRow = target?.closest('.tier-row, .chips-scroll');
    if (tierRow) {
      const tier = tierRow.dataset.tier;
      movePlacement(itemId, tier || null);
    }
    touchDraggedChipRef.current = null;
  }, [movePlacement]);

  const handleDownload = useCallback(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const padding = 40;
    const titleHeight = 120;
    const tierHeight = 80;
    const tierLabelWidth = 60;
    const chipHeight = 40;
    const width = 1200;
    const height = titleHeight + (4 * tierHeight) + (2 * padding);

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, width, height);

    const category = CATEGORIES[state.category];
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 40px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Rank the ${category.headline}`, padding, padding + 40);

    const tierColors = ['#EF4444', '#F97316', '#EAAB04', '#22C55E'];
    let y = titleHeight;

    TIERS.forEach((tier, index) => {
      const color = tierColors[index];
      ctx.fillStyle = color;
      ctx.fillRect(padding, y, tierLabelWidth, tierHeight);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(tier, padding + tierLabelWidth / 2, y + tierHeight / 2);

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(padding + tierLabelWidth + 20, y, width - padding * 2 - tierLabelWidth - 20, tierHeight);
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 2;
      ctx.strokeRect(padding + tierLabelWidth + 20, y, width - padding * 2 - tierLabelWidth - 20, tierHeight);

      let chipX = padding + tierLabelWidth + 40;
      let chipY = y + 20;
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#1f2937';

      state.items.forEach(item => {
        if (state.placements[item.id] === tier) {
          ctx.fillStyle = '#e5e7eb';
          ctx.beginPath();
          ctx.roundRect(chipX, chipY, 120, chipHeight, 20);
          ctx.fill();

          const img = new Image();
          img.src = item.image;
          img.onload = () => {
            ctx.drawImage(img, chipX + 5, chipY + 5, 30, 30);
          };
          img.onerror = () => {
            ctx.fillStyle = item.color;
            ctx.fillRect(chipX + 5, chipY + 5, 30, 30);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 18px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(item.name.charAt(0).toUpperCase(), chipX + 20, chipY + 20);
          };

          ctx.fillStyle = '#1f2937';
          ctx.font = '12px sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.name, chipX + 45, chipY + chipHeight / 2);
          chipX += 130;
        }
      });

      y += tierHeight;
    });

    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${category.headline}-tier-list.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }, [state]);

  const category = CATEGORIES[state.category];

  return (
    <div className="container">
      <div className="header">
        <div className="eyebrow">React Tier List</div>
        <div className="headline">
          Rank the <span className="highlight">{category.headline}</span>
        </div>
        <p className="subtitle">Drag and drop items into tiers to rank them</p>
        <div className="hint">Click any item for more details</div>
      </div>

      <CategoryPicker category={state.category} onCategoryChange={handleSwitchCategory} />

      <div className="controls">
        <button className="btn btn-primary" onClick={handleDownload}>
          Download as Image
        </button>
        <button className="btn btn-secondary" onClick={handleShuffle}>
          Shuffle New Items
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset Rankings
        </button>
      </div>

      <Tray
        items={state.items}
        placements={state.placements}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onChipDragStart={handleDragStart}
        onChipDragEnd={handleDragEnd}
        onChipTouchStart={handleTouchStart}
        onChipTouchMove={handleTouchMove}
        onChipTouchEnd={handleTouchEnd}
        onChipClick={setSelectedItem}
      />

      <div className="tiers">
        {TIERS.map(tier => (
          <TierRow
            key={tier}
            tier={tier}
            items={state.items}
            placements={state.placements}
            itemsMap={itemsMapRef.current()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onChipDragStart={handleDragStart}
            onChipDragEnd={handleDragEnd}
            onChipTouchStart={handleTouchStart}
            onChipTouchMove={handleTouchMove}
            onChipTouchEnd={handleTouchEnd}
            onChipClick={setSelectedItem}
          />
        ))}
      </div>

      <DetailsModal item={selectedItem} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default App;
