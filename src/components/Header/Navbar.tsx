import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

import IconButton from "src/components/UI/IconButton";
import { useCart } from "src/hooks/useCart";
import { ROUTE_NAMES } from "src/router/routeNames";
import heartIcon from "src/static/icons/heart.png";
import cartIcon from "src/static/icons/cart.png";
import profileIcon from "src/static/icons/profile.png";
import styleClasses from "src/components/Header/styles.module.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const navigateToCart = () => {
    navigate(ROUTE_NAMES.CART);
  };

  return (
    <nav className={styleClasses.navbar}>
      <IconButton
        imageUrl={heartIcon}
        imageAlt="Favourite"
        imageClassName={styleClasses.navIcon}
      />
      <IconButton
        imageUrl={cartIcon}
        imageAlt="Cart"
        imageClassName={styleClasses.navIcon}
        buttonClassName={styleClasses.badgeButton}
        onClick={navigateToCart}
        badge={
          cart.length > 0 && (
            <Badge
              className={styleClasses.badge}
              pill={true}
              bg="light"
              text="dark"
            >
              {cart.reduce(
                (quantitySum, { quantity }) => quantitySum + quantity,
                0
              )}
            </Badge>
          )
        }
      />
      <IconButton
        imageUrl={profileIcon}
        imageAlt="Profile"
        imageClassName={styleClasses.navIcon}
      />
    </nav>
  );
};

export default Navbar;
