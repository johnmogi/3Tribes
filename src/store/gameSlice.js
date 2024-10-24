import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    character: null,
    score: 0,
    // add more game state variables as needed
  },
  reducers: {
    selectCharacter: (state, action) => {
      state.character = action.payload;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    // add more reducers for your game logic
  },
});

export const { selectCharacter, incrementScore } = gameSlice.actions;
export default gameSlice.reducer;
