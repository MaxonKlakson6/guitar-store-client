import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

import CartItem from "src/pages/Cart/components/CartItem";
import { CartItem as CartItemType } from "src/types/products";
import { ROUTE_NAMES } from "src/router/routeNames";
import emptyCartGif from "src/static/gifs/empty-cart.gif";
import stylesClasses from "src/pages/Cart/components/CartLayout/styles.module.scss";
import OrderModal from "src/components/OrderModal";

interface CartLayoutProps {
  cartItems: CartItemType[];
  isLoading: boolean;
  handleIncrementQuantity: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => void;
  handleDecrementQuantity: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number,
    quantity: number
  ) => void;
}

const CartLayout = ({
  cartItems,
  isLoading,
  handleIncrementQuantity,
  handleDecrementQuantity,
}: CartLayoutProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => setShowModal(!showModal);
  const totalPrice = cartItems.reduce(
    (totalPriceSum, { price, quantity }) => totalPriceSum + price * quantity,
    0
  );
  return (
    <div className={stylesClasses.cartWrapper}>
      <OrderModal
        show={showModal}
        price={totalPrice}
        onHide={handleToggleModal}
      />
      {!isLoading && cartItems.length === 0 ? (
        <div className={stylesClasses.emptyCartBlock}>
          <h1>Корзина пуста</h1>
          <img src={emptyCartGif} alt="Корзина пуста" />
          <Link
            to={ROUTE_NAMES.STORE}
            className={stylesClasses.makeOrderButton}
          >
            Вернуться в магазин
          </Link>
        </div>
      ) : (
        <>
          <div className={stylesClasses.cartHeading}>
            <h1 className={stylesClasses.title}>Содержимое корзины</h1>
            <button
              className={stylesClasses.makeOrderButton}
              onClick={handleToggleModal}
            >
              Оформить заказ
            </button>
          </div>
          <div className={stylesClasses.cartItemsWrapper}>
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.vendorCode}
                name={cartItem.name}
                image={cartItem.image}
                price={cartItem.price}
                quantity={cartItem.quantity}
                vendorCode={cartItem.vendorCode}
                handleIncrementQuantity={handleIncrementQuantity}
                handleDecrementQuantity={handleDecrementQuantity}
              />
            ))}
          </div>
          <div className={stylesClasses.bottomBlock}>
            <button
              className={stylesClasses.makeOrderButton}
              onClick={handleToggleModal}
            >
              Оформить заказ
            </button>
            <p className={stylesClasses.cartTotalPrice}>
              Итоговая цена:
              <span>{totalPrice.toFixed(2)} б.р.</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartLayout;
