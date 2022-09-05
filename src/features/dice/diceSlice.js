import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const diceReducer = createSlice({
  name: "dice", // action is created based on this
  initialState,
  reducers: {
    rollDice: (state, action) => {
      state.value = Math.ceil(Math.random() * 6);
    },
  },
});

export default diceReducer.reducer;
export const { rollDice } = diceReducer.actions;
