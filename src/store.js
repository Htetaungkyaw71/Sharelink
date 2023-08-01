import { configureStore } from "@reduxjs/toolkit";
// import LinkSlice from "./redux/LinkSlice";
// import { loadState } from "./redux/localStorage";
import { userServices } from "./redux/UserServices";
import { linkServices } from "./redux/linkServices";

export const store = configureStore({
  reducer: {
    [userServices.reducerPath]: userServices.reducer,
    [linkServices.reducerPath]: linkServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userServices.middleware,
      linkServices.middleware,
    ]),
});
