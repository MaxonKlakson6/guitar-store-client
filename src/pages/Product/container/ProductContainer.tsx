import { useNavigate, useParams } from "react-router-dom";

import Loader from "src/components/UI/Loader";
import ProductLayout from "src/pages/Product/components/ProductLayout";
import { useGetProductQuery } from "src/api/goodsApi";
import { useCart } from "src/hooks/useCart";
import { isNull } from "src/helpers/isNull";
import { Product } from "src/types/products";
import { ROUTE_NAMES } from "src/router/routeNames";

const ProductContainer = () => {
  const { vendorCode } = useParams();
  const navigate = useNavigate();

  const { handleAddCartItem } = useCart();
  const { data: product, isLoading } = useGetProductQuery(Number(vendorCode));

  if (isNull(product as Product | null)) {
    navigate(ROUTE_NAMES.NOT_FOUND);
  }

  return (
    <Loader isLoading={isLoading}>
      <ProductLayout
        product={product as Product}
        handleAddCartItem={handleAddCartItem}
      />
    </Loader>
  );
};

export default ProductContainer;
