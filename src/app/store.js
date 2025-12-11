import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice.js";
import productReducer from "../feature/product/productSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    GetProduct: productReducer,
  },
});