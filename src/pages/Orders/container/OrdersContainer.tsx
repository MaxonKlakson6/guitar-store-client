import { useGetOrdersQuery } from "src/api/orderApi";
import Loader from "src/components/UI/Loader";
import OrdersLayout from "src/pages/Orders/components/OrdersLayout";

const OrdersContainer = () => {
  const { data: orders = [], isLoading } = useGetOrdersQuery();

  return (
    <Loader isLoading={isLoading}>
      <OrdersLayout orders={orders} />
    </Loader>
  );
};

export default OrdersContainer;
