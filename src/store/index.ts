import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { REHYDRATE, PERSIST } from "redux-persist/es/constants";

import authReducer, { AuthInitialState } from "src/store/reducers/authSlice";
import favouriteReducer from "src/store/reducers/favouriteSlice";
import { authConfig } from "src/store/persist/auth";
import { rootApi } from "src/api";

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthInitialState>(authConfig, authReducer),
    favourite: favouriteReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [REHYDRATE, PERSIST] },
    }).concat(rootApi.middleware),
  devTools: import.meta.env.MODE !== "production",
});

export const persistore = persistStore(store);
