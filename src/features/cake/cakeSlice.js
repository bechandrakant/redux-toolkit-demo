import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state, action) => {
      state.numOfCakes--;
    },
    restockCake: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeReducer.reducer;
export const { orderCake, restockCake } = cakeReducer.actions;
