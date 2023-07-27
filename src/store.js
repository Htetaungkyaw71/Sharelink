import { configureStore } from "@reduxjs/toolkit";
import LinkSlice from "./redux/LinkSlice";
import { loadState } from "./redux/localStorage";

export const store = configureStore({
  reducer: { LinkSlice },
  preloadedState: loadState(),
});
