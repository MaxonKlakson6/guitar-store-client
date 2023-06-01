import { MouseEvent } from "react";

import {
  useGetFavouriteItemsQuery,
  useToggleFavouriteItemMutation,
} from "src/api/favouriteApi";
import { FavouriteItem } from "src/types/products";

interface UseFavouriteReturnValues {
  favouriteList: FavouriteItem[];
  isLoading: boolean;
  handleToggleFavouriteItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
}

export const useFavourite = (): UseFavouriteReturnValues => {
  const { data: favouriteList = [], isLoading } = useGetFavouriteItemsQuery();
  const [toggleFavouriteItem, { isLoading: isToggling }] =
    useToggleFavouriteItemMutation();

  const handleToggleFavouriteItem = (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => {
    event.preventDefault();
    if (!isToggling) {
      toggleFavouriteItem(vendorCode);
    }
  };

  return {
    favouriteList,
    isLoading,
    handleToggleFavouriteItem,
  };
};
