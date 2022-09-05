import { createSlice } from "@reduxjs/toolkit";
import { orderCake } from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 20,
};

const icecreamReducer = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state) => {
      state.numOfIcecream--;
    },
    restockIcecream: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderCake(), (state, action) => {
      state.numOfIcecream--;
    });
  },
});

export default icecreamReducer.reducer;
export const { orderIcecream, restockIcecream } = icecreamReducer.actions;
