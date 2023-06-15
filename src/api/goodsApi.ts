import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";
import { Product } from "src/types/products";
import { rootApi } from "src/api";

export const goodsApi = rootApi.injectEndpoints({
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
