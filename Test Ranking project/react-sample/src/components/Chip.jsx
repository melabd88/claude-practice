import React, { memo } from 'react';

const Chip = memo(({ item, onDragStart, onDragEnd, onTouchStart, onTouchMove, onTouchEnd, onClick }) => (
  <div
    className="chip"
    draggable
    data-item-id={item.id}
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
    onClick={onClick}
  >
    <img
      src={item.image}
      alt={item.name}
      className="chip-logo"
      width="24"
      height="24"
      loading="lazy"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
    <span className="chip-text">{item.name}</span>
  </div>
), (prev, next) => prev.item.id === next.item.id);

Chip.displayName = 'Chip';

export default Chip;
