import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQueryWithCheckToken } from "src/api/authApi";
import { ChangeQuantityRequest } from "src/pages/Cart/types/cartRequests";
import { CartItem } from "src/types/products";

export const cartApi = createApi({
  reducerPath: "cart",
  tagTypes: ["CartItems"],
  baseQuery: baseQueryWithCheckToken,
  endpoints: (builder) => ({
    getCart: builder.query<CartItem[], void>({
      query: () => ({
        url: "/cart",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ vendorCode }) => ({
                type: "CartItems" as const,
                id: vendorCode,
              })),
              { type: "CartItems", id: "LIST" },
            ]
          : [{ type: "CartItems", id: "LIST" }],
    }),
    addCartItem: builder.mutation<string, number>({
      query: (vendorCode) => ({
        url: "/cart/add",
        method: "POST",
        body: {
          vendorCode,
        },
      }),
      invalidatesTags: [{ type: "CartItems", id: "LIST" }],
    }),
    changeItemQuantity: builder.mutation<string, ChangeQuantityRequest>({
      query: (body) => ({
        url: "/cart/change",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "CartItems", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCartQuery,
  useLazyGetCartQuery,
  useAddCartItemMutation,
  useChangeItemQuantityMutation,
} = cartApi;
