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
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}джаз бас`}
        choosen={choosenTab}
        tabName="джаз бас"
      />
      <CategoryTab
        label="Пресижн бас"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}пресижн бас`}
        choosen={choosenTab}
        tabName="пресижн бас"
      />
      <CategoryTab
        label="Безладовая бас-гитара"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}безлодовый бас`}
        choosen={choosenTab}
        tabName="безлодовый бас"
      />
      <CategoryTab
        label="Полуакустическая бас-гитара"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}полуакустический бас`}
        choosen={choosenTab}
        tabName="полуакустический бас"
      />
      <CategoryTab
        label="Аксессуары"
        linkTo={`${ROUTE_NAMES.STORE_WITH_CATEGORY}аксессуары`}
        choosen={choosenTab}
        tabName="аксессуары"
      />
    </div>
  );
};

export default Categories;
