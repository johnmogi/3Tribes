// src/components/GameBoard.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

const GameBoard = () => {
  const character = useSelector((state) => state.game.character);
  const [playerPosition, setPlayerPosition] = useState(0); // Starting position
  const [score, setScore] = useState(0);

  const [tiles, setTiles] = useState(generateTiles(25)); // Generate tiles for a 5x5 board
  const [message, setMessage] = useState("");

  // Function to generate random tiles with different contents
  function generateTiles(size) {
    const tileContents = ["monster", "treasure", "trap", "empty", "hint"];
    return Array.from({ length: size }, () => {
      const randomIndex = Math.floor(Math.random() * tileContents.length);
      return tileContents[randomIndex];
    });
  }

  // Function to roll the dice and determine movement
  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1; // Dice rolls a number between 1 and 6
  };

  // Function to move the player
  const movePlayer = () => {
    const diceRoll = rollDice();
    const newPosition = playerPosition + diceRoll;
    if (newPosition < tiles.length) {
      setPlayerPosition(newPosition);
      handleTileReveal(newPosition); // Reveal the tile content when moving
      setScore((prevScore) => prevScore + 1); // Example scoring mechanic
    }
  };

  // Function to handle tile reveal
  const handleTileReveal = (position) => {
    const tileContent = tiles[position];
    switch (tileContent) {
      case "monster":
        setMessage("You encountered a monster! Prepare for battle!");
        break;
      case "treasure":
        setMessage("You found a treasure! Score points!");
        setScore((prevScore) => prevScore + 5); // Example score increment for treasure
        break;
      case "trap":
        setMessage("You fell into a trap! Lose some points.");
        setScore((prevScore) => Math.max(prevScore - 3, 0)); // Example score decrement
        break;
      case "hint":
        setMessage("You found a hint! It may help you later.");
        break;
      case "empty":
        setMessage("Nothing here... Just keep moving.");
        break;
      default:
        setMessage("");
    }
  };

  return (
    <div>
      <h1>Game Board</h1>
      <h2>Character: {character}</h2>
      <h3>Score: {score}</h3>
      <h4>{message}</h4>

      <div
        className="board"
        style={{ display: "grid", gridTemplateColumns: "repeat(5, 100px)" }}
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${index === playerPosition ? "active" : ""}`}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: index === playerPosition ? "lightblue" : "white",
            }}
          >
            {index === playerPosition ? tile.charAt(0).toUpperCase() : "?"}{" "}
            {/* Show first letter of tile type */}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={movePlayer}>Roll Dice and Move</button>
      </div>
    </div>
  );
};

export default GameBoard;
