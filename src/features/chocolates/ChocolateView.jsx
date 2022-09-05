import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyChocolate, addChocolate } from "./chocolateSlice";

const ChocolateView = () => {
  const numOfChocolate = useSelector(
    (state) => state.chocolate.numOfChocolates
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of chocolates: {numOfChocolate}</h2>
      <button onClick={() => dispatch(buyChocolate(2))}>buy chocolate</button>
      <button onClick={() => dispatch(addChocolate())}>add chocolate</button>
    </div>
  );
};

export default ChocolateView;
