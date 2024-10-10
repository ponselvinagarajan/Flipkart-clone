import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slice/CartSlice";
import userReducer from "../Slice/UserSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    cartData: cartReducer,
  },
});