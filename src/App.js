import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { orderCake, restockCake } from "./features/cake/cakeSlice";
import {
  orderIcecream,
  restockIcecream,
} from "./features/icecream/icecreamSlice";
import { useEffect } from "react";
import { fetchUsers } from "./features/user/userSlice";
import ChocolateView from "./features/chocolates/ChocolateView";
import Dice from "./features/dice/Dice";
import PostView from "./features/posts/PostView";

function App() {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const iceCreams = useSelector((state) => state.icecream.numOfIcecream);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <ChocolateView />
      <Dice />
      <PostView />
      {/* <h2>Cakes count: {cakes}</h2>
      <button onClick={() => dispatch(orderCake())}>buy cake</button>
      <button onClick={() => dispatch(restockCake(5))}>restock cake</button>
      <h2>Icecream count: {iceCreams}</h2>
      <button onClick={() => dispatch(orderIcecream())}>buy icecream</button>
      <button onClick={() => dispatch(restockIcecream(5))}>
        restock icecream
      </button>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul> */}
    </div>
  );
}

export default App;
