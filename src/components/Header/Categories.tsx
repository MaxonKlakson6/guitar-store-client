import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "src/router/routeNames";
import styleClasses from "src/components/Header/styles.module.scss";

const Categories = () => {
  return (
    <div className={styleClasses.categories}>
      <Link to={ROUTE_NAMES.STORE} className={styleClasses.category}>
        Главная
      </Link>
      <Link
        to={`${ROUTE_NAMES.STORE_WITH_CATEGORY}jazz-bass`}
        className={styleClasses.category}
      >
        Джаз бас
      </Link>
      <Link
        to={`${ROUTE_NAMES.STORE_WITH_CATEGORY}precision-bass`}
        className={styleClasses.category}
      >
        Пресижн бас
      </Link>
      <Link
        to={`${ROUTE_NAMES.STORE_WITH_CATEGORY}fretless`}
        className={styleClasses.category}
      >
        Безладовая бас-гитара
      </Link>
      <Link
        to={`${ROUTE_NAMES.STORE_WITH_CATEGORY}semi-acoustic`}
        className={styleClasses.category}
      >
        Полуакустическая бас-гитара
      </Link>
      <Link
        to={`${ROUTE_NAMES.STORE_WITH_CATEGORY}accessories`}
        className={styleClasses.category}
      >
        Аксессуары
      </Link>
    </div>
  );
};

export default Categories;
