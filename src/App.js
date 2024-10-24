import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ChooseTribes from "./components/ChooseTribes";
import PlayerStats from "./components/PlayerStats";

const App = () => {
  const [stage, setStage] = useState("chooseTribe"); // Initial stage is 'chooseTribe'
  const [playerStats, setPlayerStats] = useState({
    health: 100,
    energy: 100,
    experience: 0,
  }); // Sample player stats

  // Function to render the current stage
  const renderStage = () => {
    switch (stage) {
      case "chooseTribe":
        return <ChooseTribes />;
      case "inGame":
        return <GameBoard />;
      case "showStats":
        return <PlayerStats stats={playerStats} />;
      default:
        return <ChooseTribes />;
    }
  };

  return (
    <div className="App">
      <h1>My Game</h1>
      {renderStage()}
      <div className="navigation-buttons">
        <button onClick={() => setStage("chooseTribe")}>Choose Tribe</button>
        <button onClick={() => setStage("inGame")}>Start Game</button>
        <button onClick={() => setStage("showStats")}>Show Player Stats</button>
      </div>
    </div>
  );
};

export default App;
