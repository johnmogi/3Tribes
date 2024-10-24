// src/components/CharacterSelection.js
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { selectCharacter } from "../store/gameSlice";

const characters = ["Gypsy Cat", "Amazon Bird", "Viking Hamster"];

const CharacterSelection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelect = (character) => {
    dispatch(selectCharacter(character));
    navigate("/game"); // Navigate to the game board
  };

  return (
    <div>
      <h2>Select Your Character</h2>
      {characters.map((character) => (
        <button key={character} onClick={() => handleSelect(character)}>
          {character}
        </button>
      ))}
    </div>
  );
};

export default CharacterSelection;
