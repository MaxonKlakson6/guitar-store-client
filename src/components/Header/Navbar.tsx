import Badge from "react-bootstrap/Badge";

import { useCart } from "src/hooks/useCart";
import IconButton from "src/components/UI/IconButton";
import heartIcon from "src/static/icons/heart.png";
import cartIcon from "src/static/icons/cart.png";
import profileIcon from "src/static/icons/profile.png";
import styleClasses from "src/components/Header/styles.module.scss";

const Navbar = () => {
  const { cart } = useCart();

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
        badge={
          cart.length > 0 && (
            <Badge
              className={styleClasses.badge}
              pill={true}
              bg="light"
              text="dark"
            >
              {cart.length}
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
