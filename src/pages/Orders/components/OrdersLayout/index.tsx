import OrderItem from "src/pages/Orders/components/OrderItem";
import { Order } from "src/api/orderApi";
import logo from "src/static/images/logo.png";
import stylesClasses from "src/pages/Orders/components/OrdersLayout/styles.module.scss";

interface OrdersLayoutProps {
  orders: Order[];
}

const OrdersLayout = ({ orders }: OrdersLayoutProps) => {
  return (
    <div className={stylesClasses.wrapper}>
      <div className={stylesClasses.infoColumn}>
        <h1 className={stylesClasses.title}>Текущие заказы</h1>
        <div className={stylesClasses.ordersWrapper}>
          {orders.map((order) => (
            <OrderItem key={order.id} {...order} />
          ))}
        </div>
      </div>
      <img className={stylesClasses.logo} src={logo} alt="Logo" />
    </div>
  );
};

export default OrdersLayout;
