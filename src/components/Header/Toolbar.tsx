import Search from "src/components/Header/Search";
import Navbar from "src/components/Header/Navbar";
import logo from "src/static/images/logo.png";
import styleClasses from "src/components/Header/styles.module.scss";

const Toolbar = () => {
  return (
    <div className={styleClasses.toolbar}>
      <img src={logo} alt="Logo" />
      <div>
        <h1 className={styleClasses.heading}>BassMarketplace</h1>
        <Search />
      </div>
      <Navbar />
    </div>
  );
};

export default Toolbar;
