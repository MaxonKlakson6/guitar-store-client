import { fillWithZero } from "src/helpers/generateOrderNumber";
import stylesClasses from "src/pages/Orders/components/OrderItem/styles.module.scss";

interface OrderItemProps {
  id: number;
  price: number;
  deliveryMethod: string;
  address: string;
  createdAt: string;
  isReceived: boolean;
}

const OrderItem = ({
  id,
  price,
  deliveryMethod,
  address,
  createdAt,
  isReceived,
}: OrderItemProps) => {
  const orderDate = new Date(createdAt);
  return (
    <div className={stylesClasses.orderWrapper}>
      <h3 className={stylesClasses.title}>Заказ № {fillWithZero(id, 4)}</h3>
      <div className={stylesClasses.orderInfo}>
        <p className={stylesClasses.info}>
          Сумма заказа: {price.toFixed(2)} br
        </p>
        <p className={stylesClasses.info}>
          Способ доставки:{" "}
          {deliveryMethod === "pickUp" ? "(самовывоз)" : "(доставка)"} {address}
        </p>
        <p className={stylesClasses.info}>
          Дата оформления заказа:{" "}
          {`${fillWithZero(orderDate.getDay(), 2)}.${fillWithZero(
            orderDate.getMonth(),
            2
          )}.${orderDate.getFullYear()}`}
        </p>
        <p className={stylesClasses.info}>
          Статус: {isReceived ? "Завершен" : "в процессе"}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
