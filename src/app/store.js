import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import chocolateReducer from "../features/chocolates/chocolateSlice";
import diceReducer from "../features/dice/diceSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    chocolate: chocolateReducer,
    dice: diceReducer,
    post: postReducer,
  },
});

export default store;
