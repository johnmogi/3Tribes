import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice"; // create a gameSlice.js file for your game state

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
