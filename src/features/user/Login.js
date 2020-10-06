import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUser,
  logout,
  setBasket,
  removeOneBasket,
  resetBasket,
  selectUser,
  selectBasket,
} from "./userSlice";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const basket = useSelector(selectBasket);

  const loginToApp = () => {
    dispatch(setUser({ user: "Ahsan" }));
  };

  const logoutToApp = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>There is login Component</h2>
      {user ? <h2>{user} is logged in</h2> : <h2>Nobody logged in</h2>}
      <button onClick={loginToApp}>Login to App</button>
      <button onClick={logoutToApp}>logout</button>

      <div
        style={{ display: "flex", paddingLeft: "565px", paddingTop: "10px" }}
      >
        <button onClick={() => dispatch(setBasket({ basket: 1 }))}>
          addToCart
        </button>

        <button onClick={() => dispatch(removeOneBasket())}>removeOne</button>

        <button onClick={() => dispatch(resetBasket())}>Reset</button>
      </div>
    </div>
  );
}

export default Login;
