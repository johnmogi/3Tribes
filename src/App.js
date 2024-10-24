// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import CharacterSelection from "./components/CharacterSelection";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CharacterSelection />} />
      <Route path="/game" element={<GameBoard />} />
    </Routes>
  );
};

export default App;
