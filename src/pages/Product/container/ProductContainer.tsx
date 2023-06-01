import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "src/components/UI/Loader";
import ProductLayout from "src/pages/Product/components/ProductLayout";
import { useGetProductQuery } from "src/api/goodsApi";
import { useCart } from "src/hooks/useCart";
import { useFavourite } from "src/hooks/useFavourite";
import { isNull } from "src/helpers/isNull";
import { Product } from "src/types/products";
import { ROUTE_NAMES } from "src/router/routeNames";

const ProductContainer = () => {
  const { vendorCode } = useParams();
  const navigate = useNavigate();
  const [favouriteButtonText, setFavouriteButtonText] = useState<string>(
    "Добавить в избранные"
  );

  const { handleAddCartItem } = useCart();
  const { favouriteList, handleToggleFavouriteItem } = useFavourite();
  const { data: product, isLoading } = useGetProductQuery(Number(vendorCode));

  useEffect(() => {
    const favouriteItem = favouriteList.find(
      (favouriteItem) => favouriteItem.vendorCode === Number(vendorCode)
    );
    setFavouriteButtonText(
      favouriteItem ? "Убрать из избранного" : "Добавить в избранные"
    );
  }, [favouriteList.length]);

  if (isNull(product as Product | null)) {
    navigate(ROUTE_NAMES.NOT_FOUND);
  }

  return (
    <Loader isLoading={isLoading}>
      <ProductLayout
        product={product as Product}
        favouriteButtonText={favouriteButtonText}
        handleAddCartItem={handleAddCartItem}
        handleToggleFavouriteItem={handleToggleFavouriteItem}
      />
    </Loader>
  );
};

export default ProductContainer;
