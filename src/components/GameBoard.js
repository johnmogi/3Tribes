import React, { useState } from "react";
import "./GameBoard.css"; // Add a CSS file for styling

const GameBoard = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const boardSize = 5; // Define the size of the game board

  const movePlayer = (direction) => {
    const newPosition = { ...playerPosition };

    switch (direction) {
      case "up":
        newPosition.y = Math.max(0, newPosition.y - 1);
        break;
      case "down":
        newPosition.y = Math.min(boardSize - 1, newPosition.y + 1);
        break;
      case "left":
        newPosition.x = Math.max(0, newPosition.x - 1);
        break;
      case "right":
        newPosition.x = Math.min(boardSize - 1, newPosition.x + 1);
        break;
      default:
        break;
    }

    setPlayerPosition(newPosition);
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < boardSize; row++) {
      const columns = [];
      for (let col = 0; col < boardSize; col++) {
        const isPlayer = playerPosition.x === col && playerPosition.y === row;
        columns.push(
          <div
            key={`${row}-${col}`}
            className={`cell ${isPlayer ? "player" : ""}`}
          >
            {isPlayer ? "P" : ""}
          </div>
        );
      }
      board.push(
        <div key={row} className="row">
          {columns}
        </div>
      );
    }
    return board;
  };

  return (
    <div>
      <h2>Game Board</h2>
      <p>Player Position: {JSON.stringify(playerPosition)}</p>
      <div className="board">{renderBoard()}</div>
      <div className="controls">
        <button onClick={() => movePlayer("up")}>Move Up</button>
        <button onClick={() => movePlayer("down")}>Move Down</button>
        <button onClick={() => movePlayer("left")}>Move Left</button>
        <button onClick={() => movePlayer("right")}>Move Right</button>
      </div>
    </div>
  );
};

export default GameBoard;
