import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "src/types/reduxTypes";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const store = getState() as RootState;
    const token = store.auth;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
