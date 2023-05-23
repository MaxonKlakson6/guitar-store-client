import { MouseEvent } from "react";

import {
  useAddCartItemMutation,
  useChangeItemQuantityMutation,
  useGetCartQuery,
} from "src/api/cartApi";
import { CartItem } from "src/types/products";

interface UseCartReturnValues {
  cart: CartItem[];
  isLoading: boolean;
  handleAddCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
  handleIncrementCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => void;
  handleDecrementCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => void;
}

export const useCart = (): UseCartReturnValues => {
  const { data: cart = [], isLoading } = useGetCartQuery();

  const [addCartItem, { isLoading: isAddingItem }] = useAddCartItemMutation();
  const [changeQuantity, { isLoading: isUpdatingQuantity }] =
    useChangeItemQuantityMutation();

  const handleAddCartItem = (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => {
    event.preventDefault();
    if (!isAddingItem) {
      addCartItem(vendorCode);
    }
  };

  const handleIncrementCartItem = (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => {
    event.preventDefault();
    if (!isUpdatingQuantity) {
      changeQuantity({ vendorCode, quantity: quantity + 1 });
    }
  };

  const handleDecrementCartItem = (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => {
    event.preventDefault();
    if (!isUpdatingQuantity) {
      changeQuantity({ vendorCode, quantity: quantity - 1 });
    }
  };

  return {
    cart,
    isLoading,
    handleAddCartItem,
    handleIncrementCartItem,
    handleDecrementCartItem,
  };
};
