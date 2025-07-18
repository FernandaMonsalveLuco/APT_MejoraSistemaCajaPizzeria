import { configureStore } from "@reduxjs/toolkit";
import ordenReducer from "../features/ordenSlice";

export const store = configureStore({
  reducer: {
    orden: ordenReducer,
  },
});
