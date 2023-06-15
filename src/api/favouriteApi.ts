import { transformFavouritesIntoObject } from "src/helpers/transformFavouritesIntoObject";
import { saveFavourite } from "src/store/reducers/favouriteSlice";
import { FavouriteItem } from "src/types/products";
import { rootApi } from "src/api";

export const favouriteApi = rootApi.injectEndpoints({
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
              "User",
            ]
          : [{ type: "FavouriteItems", id: "LIST" }, "User"],
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
