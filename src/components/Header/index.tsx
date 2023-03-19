import Toolbar from "src/components/Header/Toolbar";
import Categories from "src/components/Header/Categories";

import styleClasses from "src/components/Header/styles.module.scss";

const Header = () => {
  return (
    <header className={styleClasses.header}>
      <Toolbar />
      <Categories />
    </header>
  );
};

export default Header;
