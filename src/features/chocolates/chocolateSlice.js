import { createSlice } from "@reduxjs/toolkit";
import { rollDice } from "../dice/diceSlice";

const initialState = {
  numOfChocolates: 5,
};

const chocolateReducer = createSlice({
  name: "chocolate",
  initialState,
  reducers: {
    addChocolate: (state) => {
      state.numOfChocolates++;
    },
    buyChocolate: (state, action) => {
      state.numOfChocolates -= action.payload || 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rollDice(), (state, action) => {
      state.numOfChocolates--;
    });
  },
});

export default chocolateReducer.reducer;
export const { addChocolate, buyChocolate } = chocolateReducer.actions;
