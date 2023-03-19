import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "src/api/baseQuery";
import { Guitar } from "src/types/products";

export const goodsApi = createApi({
  reducerPath: "goods",
  baseQuery,
  endpoints: (builder) => ({
    getAllGoods: builder.query<Guitar[], void>({
      query: () => ({
        url: "/goods",
      }),
    }),
  }),
});

export const { useGetAllGoodsQuery } = goodsApi;
