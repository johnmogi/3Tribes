// src/utils/tileUtils.js
export const generateTiles = (numTiles) => {
  const tiles = [];
  for (let i = 0; i < numTiles; i++) {
    // Example tile types: 'empty', 'monster', 'treasure', etc.
    const type = i % 5 === 0 ? "monster" : "empty"; // Just an example
    tiles.push({ type, monster: { name: "Goblin", power: 5 } }); // Assuming each tile can contain a monster object
  }
  return tiles;
};
