import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { isSignInResponse } from "src/helpers/isSignInResponse";
import { signIn, setToInitialState } from "src/store/reducers/authSlice";
import { RootState } from "src/types/reduxTypes";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_DEV_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const store = getState() as RootState;
    const { token } = store.auth;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithCheckToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);
  const store = api.getState() as RootState;

  if (response.error?.status === 401 && !store.auth.isUpdated) {
    localStorage.clear();
    api.dispatch(setToInitialState());
    return response;
  }

  if (isSignInResponse(response)) {
    api.dispatch(signIn(response.data.token));
  }

  return response;
};
