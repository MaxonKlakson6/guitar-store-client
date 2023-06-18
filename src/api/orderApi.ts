import { rootApi } from "src/api";

interface OrderData {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  deliveryMethod: string;
  address: string;
}

export const orderApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    makeOrder: builder.mutation({
      query: () => ({
        url: "/order",
        method: "POST",
      }),
    }),
  }),
});
