import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { REHYDRATE, PERSIST } from "redux-persist/es/constants";

import authReducer, { AuthInitialState } from "src/store/reducers/authSlice";
import { authConfig } from "src/store/persist/auth";
import { authApi } from "src/api/authApi";
import { goodsApi } from "src/api/goodsApi";

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthInitialState>(authConfig, authReducer),
    [authApi.reducerPath]: authApi.reducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [REHYDRATE, PERSIST] },
    }).concat(authApi.middleware, goodsApi.middleware),
  devTools: import.meta.env.MODE !== "production",
});

export const persistore = persistStore(store);
