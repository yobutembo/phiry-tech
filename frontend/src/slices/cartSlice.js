import { createSlice } from "@reduxjs/toolkit";

//Initial state of the cart is set to the cart items stored in the local storage, if exists.
//Otherwise, it is set to an empty array.
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
