import {
  createApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { baseQuery } from "src/api/baseQuery";
import { saveToken } from "src/store/reducers/authSlice";
import { isTokenResponse } from "src/helpers/isTokenResponse";

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

export const baseQueryWithCheckToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);

  if (response.error?.status === 401) {
    api
      .dispatch(authApi.endpoints.createUnauthorizedUser.initiate())
      .then((response) => {
        if (isTokenResponse(response)) {
          api.dispatch(saveToken(response.data));
        }
      });
  }
  return response;
};

export const { useCreateUnauthorizedUserMutation } = authApi;
