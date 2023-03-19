import { Link, useSearchParams } from "react-router-dom";

import CategoryTab from "src/components/Header/CategoryTab";
import { ROUTE_NAMES } from "src/router/routeNames";
import styleClasses from "src/components/Header/styles.module.scss";

const Categories = () => {
  const [params] = useSearchParams();
  const choosenTab = params.get("category");
  return (
    <div className={styleClasses.categories}>
      <Link
        to={ROUTE_NAMES.STORE}
        className={`${styleClasses.category} ${styleClasses.all}`}
      >
        Главная
      </Link>
      <CategoryTab
        label="Джаз бас"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}jazz-bass`}
        choosen={choosenTab}
        tabName="jazz-bass"
      />
      <CategoryTab
        label="Пресижн бас"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}precision-bass`}
        choosen={choosenTab}
        tabName="precision-bass"
      />
      <CategoryTab
        label="Безладовая бас-гитара"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}fretless`}
        choosen={choosenTab}
        tabName="fretless"
      />
      <CategoryTab
        label="Полуакустическая бас-гитара"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}semi-acoustic`}
        choosen={choosenTab}
        tabName="semi-acoustic"
      />
      <CategoryTab
        label="Аксессуары"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}accessories`}
        choosen={choosenTab}
        tabName="accessories"
      />
    </div>
  );
};

export default Categories;
