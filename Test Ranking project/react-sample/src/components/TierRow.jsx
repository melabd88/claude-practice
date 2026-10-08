import React, { memo } from 'react';
import Chip from './Chip';

const TIER_COLORS = {
  S: '#EF4444',
  A: '#F97316',
  B: '#EAAB04',
  C: '#22C55E',
};

const TierRow = memo(({ tier, items, placements, itemsMap, onDragOver, onDragLeave, onDrop, onChipDragStart, onChipDragEnd, onChipTouchStart, onChipTouchMove, onChipTouchEnd, onChipClick }) => {
  const tieredItems = items.filter(item => placements[item.id] === tier);

  return (
    <div className="tier">
      <div className="tier-label" style={{ '--tier-bg': TIER_COLORS[tier] }}>
        {tier}
      </div>
      <div
        className="tier-row"
        data-tier={tier}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {tieredItems.map(item => (
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
        ))}
      </div>
    </div>
  );
}, (prev, next) => {
  const prevTiered = prev.items.filter(item => prev.placements[item.id] === prev.tier);
  const nextTiered = next.items.filter(item => next.placements[item.id] === next.tier);
  return prevTiered.length === nextTiered.length && prevTiered.every(item => nextTiered.some(ni => ni.id === item.id));
});

TierRow.displayName = 'TierRow';

export default TierRow;
