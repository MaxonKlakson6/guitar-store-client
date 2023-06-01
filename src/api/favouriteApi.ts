import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQueryWithCheckToken } from "src/api/authApi";
import { transformFavouritesIntoObject } from "src/helpers/transformFavouritesIntoObject";
import { saveFavourite } from "src/store/reducers/favouriteSlice";
import { FavouriteItem } from "src/types/products";

export const favouriteApi = createApi({
  reducerPath: "favouriteApi",
  tagTypes: ["FavouriteItems"],
  baseQuery: baseQueryWithCheckToken,
  endpoints: (builder) => ({
    getFavouriteItems: builder.query<FavouriteItem[], void>({
      query: () => ({
        url: "/favourite",
      }),
      async onQueryStarted(arg, api) {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(saveFavourite(transformFavouritesIntoObject(data)));
        } catch (error) {}
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ vendorCode }) => ({
                type: "FavouriteItems" as const,
                id: vendorCode,
              })),
              { type: "FavouriteItems", id: "LIST" },
            ]
          : [{ type: "FavouriteItems", id: "LIST" }],
    }),
    toggleFavouriteItem: builder.mutation<string, number>({
      query: (vendorCode) => ({
        url: "/favourite/toggle",
        method: "POST",
        body: {
          vendorCode,
        },
      }),
      invalidatesTags: [{ type: "FavouriteItems", id: "LIST" }],
    }),
  }),
});

export const { useGetFavouriteItemsQuery, useToggleFavouriteItemMutation } =
  favouriteApi;
