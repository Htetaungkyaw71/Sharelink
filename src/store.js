import { configureStore } from "@reduxjs/toolkit";
import LinkSlice from "./redux/LinkSlice";

export const store = configureStore({
  reducer: { LinkSlice },
});
