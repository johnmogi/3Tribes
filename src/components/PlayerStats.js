import React from "react";

const PlayerStats = ({ stats }) => {
  return (
    <div>
      <h2>Player Stats</h2>
      <p>Health: {stats.health}</p>
      <p>Energy: {stats.energy}</p>
      <p>Experience: {stats.experience}</p>
      {/* Add more stats as needed */}
    </div>
  );
};

export default PlayerStats;
