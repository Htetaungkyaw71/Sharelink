import { configureStore } from "@reduxjs/toolkit";
import { linkServices } from "./redux/linkServices";
import { userServices } from "./redux/UserServices";

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
