import { ChangeQuantityRequest } from "src/pages/Cart/types/cartRequests";
import { CartItem } from "src/types/products";
import { rootApi } from "src/api";

export const cartApi = rootApi.injectEndpoints({
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
              "User",
            ]
          : [{ type: "CartItems", id: "LIST" }, "User"],
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
