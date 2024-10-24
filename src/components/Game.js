import React, { useState } from "react";
import CombatModal from "./CombatModal";

// Assuming you have a list of monsters defined somewhere
const monsters = [
  { name: "Mummy", defense: 4 },
  { name: "Sand Goblin", defense: 3 },
  // Add more monsters as needed
];

const Game = () => {
  const [showCombatModal, setShowCombatModal] = useState(false);
  const [currentMonster, setCurrentMonster] = useState(null);
  const [player, setPlayer] = useState({ attack: 3 }); // Example player stats

  const handleTileClick = (tile) => {
    if (tile.type === "monster") {
      setCurrentMonster(monsters[Math.floor(Math.random() * monsters.length)]);
      setShowCombatModal(true);
    }
  };

  const handleCombatResult = (result) => {
    if (result === "win") {
      // Handle win logic (e.g., gain points, remove monster)
      console.log("You defeated the monster!");
    } else {
      // Handle lose logic (e.g., lose health, collect skull)
      console.log("You lost the combat!");
    }
  };

  return (
    <div className="game-container">
      <h1>Game Board</h1>
      <div onClick={() => handleTileClick({ type: "monster" })}>
        Click here to encounter a monster
      </div>
      <CombatModal
        show={showCombatModal}
        handleClose={() => setShowCombatModal(false)}
        player={player}
        monster={currentMonster}
        onCombatResult={handleCombatResult}
      />
    </div>
  );
};

export default Game;
