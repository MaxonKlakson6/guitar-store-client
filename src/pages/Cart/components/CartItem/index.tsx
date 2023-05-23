import { MouseEvent } from "react";
import { Link } from "react-router-dom";

import Counter from "src/components/UI/Counter";
import { CartItem as CartItemType } from "src/types/products";
import stylesClasses from "src/pages/Cart/components/CartItem/styles.module.scss";

interface CartItemProps extends CartItemType {
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

const CartItem = ({
  name,
  image,
  price,
  quantity,
  vendorCode,
  handleIncrementQuantity,
  handleDecrementQuantity,
}: CartItemProps) => {
  const handleIncrement = (event: MouseEvent<HTMLButtonElement>) => {
    handleIncrementQuantity(event, vendorCode, quantity);
  };
  const handleDecrement = (event: MouseEvent<HTMLButtonElement>) => {
    handleDecrementQuantity(event, vendorCode, quantity);
  };

  return (
    <div className={stylesClasses.cartItemWrapper}>
      <div className={stylesClasses.productInfo}>
        <Link to={`/product/${vendorCode}`} className={stylesClasses.itemName}>
          <img src={image} alt={name} className={stylesClasses.cartItemImage} />
        </Link>
        <div className={stylesClasses.productInfoText}>
          <Link
            to={`/product/${vendorCode}`}
            className={stylesClasses.itemName}
          >
            {name}
          </Link>
          <p>{price.toFixed(2)} б.р.</p>
        </div>
      </div>
      <div className={stylesClasses.productRightBlock}>
        <div>
          <h4 className={stylesClasses.columnTitle}>Цена за 1 ед</h4>
          <p className={stylesClasses.textInfo}>{price} б.р.</p>
        </div>
        <div>
          <h4 className={stylesClasses.columnTitle}>Кол-во</h4>
          <Counter
            count={quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
        <div>
          <h4 className={stylesClasses.columnTitle}>Итоговая цена</h4>
          <p className={stylesClasses.textInfo}>
            {(price * quantity).toFixed(2)} б.р.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
