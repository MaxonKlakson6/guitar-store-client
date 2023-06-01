import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "src/api/baseQuery";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";
import { Product } from "src/types/products";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllGoods: builder.query<GetAllGoodsResponse, GetGoodsRequest>({
      query: (goodsParams) => ({
        url: `/goods`,
        params: goodsParams,
      }),
    }),
    getProduct: builder.query<Product, number>({
      query: (vendorCode) => ({
        url: "/goods/product",
        params: {
          vendorCode,
        },
      }),
    }),
  }),
});

export const { useLazyGetAllGoodsQuery, useGetProductQuery } = goodsApi;
