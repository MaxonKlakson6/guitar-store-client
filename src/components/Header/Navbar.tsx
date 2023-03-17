import IconButton from "src/components/UI/IconButton";
import heart from "src/static/icons/heart.png";
import cart from "src/static/icons/cart.png";
import profile from "src/static/icons/profile.png";
import styleClasses from "src/components/Header/styles.module.scss";

const Navbar = () => {
  return (
    <nav className={styleClasses.navbar}>
      <IconButton imageUrl={heart} imageAlt="Favourite" />
      <IconButton imageUrl={cart} imageAlt="Cart" />
      <IconButton imageUrl={profile} imageAlt="Profile" />
    </nav>
  );
};

export default Navbar;
