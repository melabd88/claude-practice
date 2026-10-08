import React, { memo } from 'react';
import Chip from './Chip';

const Tray = memo(({ items, placements, onDragOver, onDragLeave, onDrop, onChipDragStart, onChipDragEnd, onChipTouchStart, onChipTouchMove, onChipTouchEnd, onChipClick }) => {
  const unrankedItems = items.filter(item => !placements[item.id]);

  return (
    <div className="tray">
      <div className="tray-label">Unranked</div>
      <div className="tray-content">
        <div
          className="chips-scroll"
          id="unranked-chips"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {unrankedItems.length > 0 ? (
            unrankedItems.map(item => (
              <Chip
                key={item.id}
                item={item}
                onDragStart={(e) => onChipDragStart(e, item.id)}
                onDragEnd={onChipDragEnd}
                onTouchStart={(e) => onChipTouchStart(e, item.id)}
                onTouchMove={onChipTouchMove}
                onTouchEnd={(e) => onChipTouchEnd(e, item.id)}
                onClick={() => onChipClick(item)}
              />
            ))
          ) : (
            <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>All items ranked!</div>
          )}
        </div>
      </div>
      <div className="tray-hint">Drag items from here into the tiers</div>
    </div>
  );
}, (prev, next) => {
  const prevUnranked = prev.items.filter(item => !prev.placements[item.id]);
  const nextUnranked = next.items.filter(item => !next.placements[item.id]);
  return prevUnranked.length === nextUnranked.length && prevUnranked.every(item => nextUnranked.some(ni => ni.id === item.id));
});

Tray.displayName = 'Tray';

export default Tray;
