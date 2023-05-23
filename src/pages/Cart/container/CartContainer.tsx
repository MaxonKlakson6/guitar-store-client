import CartLayout from "src/pages/Cart/components/CartLayout";
import { useCart } from "src/hooks/useCart";
import Loader from "src/components/UI/Loader";

const CartContainer = () => {
  const { cart, isLoading, handleIncrementCartItem, handleDecrementCartItem } =
    useCart();

  return (
    <Loader isLoading={isLoading}>
      <CartLayout
        cartItems={cart}
        isLoading={isLoading}
        handleIncrementQuantity={handleIncrementCartItem}
        handleDecrementQuantity={handleDecrementCartItem}
      />
    </Loader>
  );
};

export default CartContainer;
