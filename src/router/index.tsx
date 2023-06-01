import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "src/components/NotFound";
import CartContainer from "src/pages/Cart/container/CartContainer";
import FavouriteContainer from "src/pages/Favourite/container/FavouriteContainer";
import ProductContainer from "src/pages/Product/container/ProductContainer";
import StoreContainer from "src/pages/Store/container/StoreContainer";
import { ROUTE_NAMES } from "src/router/routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.STORE} element={<StoreContainer />} />
      <Route path={ROUTE_NAMES.PRODUCT_PAGE} element={<ProductContainer />} />
      <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
      <Route path={ROUTE_NAMES.FAVOURITE} element={<FavouriteContainer />} />
      <Route path={ROUTE_NAMES.NOT_FOUND} element={<NotFound />} />
      <Route path="/" element={<Navigate to={ROUTE_NAMES.STORE} />} />
    </Routes>
  );
};

export default Router;
