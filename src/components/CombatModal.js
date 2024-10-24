// src/components/CombatModal.js
import React from "react";

const CombatModal = ({
  show,
  handleClose,
  player,
  monster,
  onCombatResult,
}) => {
  return (
    <div className={`modal ${show ? "is-active" : ""}`}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-content">
        {/* Your modal content goes here */}
        <h2>Combat with {monster ? monster.name : "..."}</h2>
        {/* Add more combat UI here */}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default CombatModal;
