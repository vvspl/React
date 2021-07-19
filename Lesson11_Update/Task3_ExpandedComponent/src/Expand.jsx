import React from 'react';

const Expand = ({ isOpen, children, title, onClose, onOpen }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn">
          {isOpen ? (
            <i className="fas fa-chevron-up" onClick={onClose}></i>
          ) : (
            <i className="fas fa-chevron-down" onClick={onOpen}></i>
          )}
        </button>
      </div>
      {isOpen ? <div className="expand__content">{children}</div> : <></>}
    </div>
  );
};

export default Expand;
