import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_NAMES } from "src/router/routeNames";

interface PrivateRouteProps {
  condition: boolean;
}

const PrivateRoute = ({ condition }: PrivateRouteProps) => {
  return condition ? <Outlet /> : <Navigate to={ROUTE_NAMES.STORE} />;
};

export default PrivateRoute;
