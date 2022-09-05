import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rollDice } from "./diceSlice";

const Dice = () => {
  const value = useSelector((state) => state.dice.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Dice Value: {value}</h2>
      <button onClick={() => dispatch(rollDice())}>Roll Dice</button>
    </div>
  );
};

export default Dice;
