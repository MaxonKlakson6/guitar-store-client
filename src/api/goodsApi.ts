import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "src/api/baseQuery";

export const goodsApi = createApi({
  reducerPath: "goods",
  baseQuery,
  endpoints: (builder) => ({
    getAllGoods: builder.query<any, void>({
      query: () => ({
        url: "/goods",
      }),
    }),
  }),
});

export const { useGetAllGoodsQuery } = goodsApi;
