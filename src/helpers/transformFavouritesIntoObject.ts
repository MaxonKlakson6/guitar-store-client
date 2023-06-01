import { FavouriteItem, FavouritesObject } from "src/types/products";

export const transformFavouritesIntoObject = (
  favouriteList: FavouriteItem[]
): FavouritesObject =>
  favouriteList.reduce(
    (favouritesObject, favouriteItem) => ({
      ...favouritesObject,
      [favouriteItem.vendorCode]: favouriteItem,
    }),
    {}
  );
