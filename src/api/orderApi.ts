import { rootApi } from "src/api";

export interface Order {
  id: number;
  address: string;
  createdAt: string;
  deliveryMethod: string;
  isReceived: boolean;
  price: number;
}

export interface MakeOrderRequest {
  deliveryMethod: string;
  address: string;
  price: number;
}

export const orderApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => "/order",
    }),
    makeOrder: builder.mutation<string, MakeOrderRequest>({
      query: (body) => ({
        url: "/order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CartItems"],
    }),
  }),
});

export const { useGetOrdersQuery, useMakeOrderMutation } = orderApi;
