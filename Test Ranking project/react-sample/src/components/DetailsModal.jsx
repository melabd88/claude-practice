import React from 'react';

const DetailsModal = ({ item, open, onClose }) => (
  <div className={`modal ${open ? 'active' : ''}`} onClick={(e) => e.target.id === 'details-modal' && onClose()}>
    <div className="modal-content">
      <button className="modal-close" onClick={onClose}>✕</button>
      {item ? (
        <>
          <img
            src={item.image}
            alt={item.name}
            className="modal-logo"
            width="64"
            height="64"
            onError={(e) => {
              e.target.style.background = item.color;
              e.target.textContent = item.name.charAt(0);
            }}
          />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </>
      ) : null}
    </div>
  </div>
);

export default DetailsModal;
