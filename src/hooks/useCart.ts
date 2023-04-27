import { MouseEvent } from "react";

import {
  useAddCartItemMutation,
  useChangeItemQuantityMutation,
  useGetCartQuery,
} from "src/api/cartApi";
import { CartItem } from "src/types/products";

interface UseCartReturnValues {
  cart: CartItem[];
  handleAddCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
  handleIncrementCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => void;
}

export const useCart = (): UseCartReturnValues => {
  const { data: cart = [], isLoading } = useGetCartQuery();

  const [addCartItem] = useAddCartItemMutation();
  const [changeQuantity] = useChangeItemQuantityMutation();

  const handleAddCartItem = (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => {
    event.preventDefault();
    addCartItem(vendorCode);
  };

  const handleIncrementCartItem = (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => {
    event.preventDefault();
    changeQuantity({ vendorCode, quantity });
  };

  return {
    cart,
    handleAddCartItem,
    handleIncrementCartItem,
  };
};
