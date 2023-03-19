import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "src/api/baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    createUnauthorizedUser: builder.mutation<string, void>({
      query: () => ({
        url: "/user",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateUnauthorizedUserMutation } = authApi;
