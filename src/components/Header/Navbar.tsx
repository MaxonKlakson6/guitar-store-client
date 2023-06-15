import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

import ProfileIcon from "src/components/Header/ProfileIcon";
import IconButton from "src/components/UI/IconButton";
import { useCart } from "src/hooks/useCart";
import { useFavourite } from "src/hooks/useFavourite";
import { ROUTE_NAMES } from "src/router/routeNames";
import heartIcon from "src/static/icons/heart.png";
import cartIcon from "src/static/icons/cart.png";
import styleClasses from "src/components/Header/styles.module.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { favouriteList } = useFavourite();

  const navigateToCart = () => {
    navigate(ROUTE_NAMES.CART);
  };

  const navigateToFavourite = () => {
    navigate(ROUTE_NAMES.FAVOURITE);
  };

  const navigateToProfile = () => {
    navigate(ROUTE_NAMES.PROFILE);
  };

  return (
    <nav className={styleClasses.navbar}>
      <IconButton
        imageUrl={heartIcon}
        imageAlt="Favourite"
        innerText="Избранное"
        imageClassName={styleClasses.navIcon}
        buttonClassName={styleClasses.badgeButton}
        onClick={navigateToFavourite}
        badge={
          favouriteList.length > 0 && (
            <Badge
              className={styleClasses.badge}
              pill={true}
              bg="light"
              text="dark"
            >
              {favouriteList.length}
            </Badge>
          )
        }
      />
      <IconButton
        imageUrl={cartIcon}
        imageAlt="Cart"
        innerText="Корзина"
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
      <ProfileIcon navigateToProfile={navigateToProfile} />
    </nav>
  );
};

export default Navbar;
