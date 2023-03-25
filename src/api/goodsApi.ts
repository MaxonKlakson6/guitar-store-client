import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "src/api/baseQuery";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";

export const goodsApi = createApi({
  reducerPath: "goods",
  baseQuery,
  endpoints: (builder) => ({
    getAllGoods: builder.query<GetAllGoodsResponse, string>({
      query: (category) => ({
        url: `/goods?category=${category}`,
      }),
    }),
  }),
});

export const { useLazyGetAllGoodsQuery } = goodsApi;
