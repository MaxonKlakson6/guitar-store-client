import { useEffect, useState } from "react";
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
  const [quantity, setQuantity] = useState<number>(0);

  const { cart, handleAddCartItem, handleIncrementCartItem } = useCart();
  const { data: product, isLoading } = useGetProductQuery(Number(vendorCode));

  useEffect(() => {
    const potentialCartProduct = cart.find(
      ({ vendorCode: cartVendorCode }) => cartVendorCode === Number(vendorCode)
    );

    if (potentialCartProduct) {
      setQuantity(potentialCartProduct.quantity);
    }
  }, [product, cart]);

  if (isNull(product as Product | null)) {
    navigate(ROUTE_NAMES.NOT_FOUND);
  }

  return (
    <Loader isLoading={isLoading}>
      <ProductLayout
        product={product as Product}
        quantity={quantity}
        handleAddCartItem={handleAddCartItem}
        handleIncrementCartItem={handleIncrementCartItem}
      />
    </Loader>
  );
};

export default ProductContainer;
