import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithCheckToken, baseQuery } from "src/api/baseQuery";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: baseQueryWithCheckToken,
  tagTypes: ["User", "FavouriteItems", "CartItems", "UserInfo"],
  endpoints: () => ({}),
});
