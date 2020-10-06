import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    basket: 0,
  },
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload.user;
    },

    setBasket: (state, action) => {
      console.log("pre", state.basket);
      console.log("new", action.payload.basket);
      // state.basket = action.payload.basket;
      state.basket += 1;
    },

    removeOneBasket: (state, action) => {
      state.basket -= 1;
    },

    resetBasket: (state, action) => {
      state.basket = 0;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  setUser,
  logout,
  setBasket,
  resetBasket,
  removeOneBasket,
} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user.user;
// export const selectBasket = (state) => state.basket;

export default userSlice.reducer;
