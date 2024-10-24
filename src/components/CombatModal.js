import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CombatModal = ({
  show,
  handleClose,
  player,
  monster,
  onCombatResult,
}) => {
  const handleAttack = () => {
    const playerRoll = Math.floor(Math.random() * 6) + 1; // Roll a dice (1-6)
    const monsterDefense = monster.defense;

    if (playerRoll + player.attack > monsterDefense) {
      onCombatResult("win");
    } else {
      onCombatResult("lose");
    }

    handleClose();
  };

  if (!monster) return null; // Ensure monster is available

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Combat with {monster.name}!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5>Monster Card</h5>
          <p>Name: {monster.name}</p>
          <p>Defense: {monster.defense}</p>
        </div>
        <p>Roll to attack!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAttack}>
          Attack!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CombatModal;
