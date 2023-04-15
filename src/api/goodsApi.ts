import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "src/api/baseQuery";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";

export const goodsApi = createApi({
  reducerPath: "goods",
  baseQuery,
  endpoints: (builder) => ({
    getAllGoods: builder.query<GetAllGoodsResponse, GetGoodsRequest>({
      query: (goodsParams) => ({
        url: `/goods`,
        params: goodsParams,
      }),
    }),
  }),
});

export const { useLazyGetAllGoodsQuery } = goodsApi;
