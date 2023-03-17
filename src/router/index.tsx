import { Routes, Route, Navigate } from "react-router-dom";

import StoreContainer from "src/pages/Store/container/StoreContainer";
import { ROUTE_NAMES } from "src/router/routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.STORE} element={<StoreContainer />} />
      <Route path="/" element={<Navigate to={ROUTE_NAMES.STORE} />} />
    </Routes>
  );
};

export default Router;
