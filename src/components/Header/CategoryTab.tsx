import { Link } from "react-router-dom";

import { isActiveTab } from "src/helpers/isActiveTab";
import styleClasses from "src/components/Header/styles.module.scss";

interface CategoryTabProps {
  label: string;
  tabName: string;
  choosen: string | null;
  linkTo: string;
}

const CategoryTab = ({ label, linkTo, tabName, choosen }: CategoryTabProps) => {
  const className = isActiveTab(
    choosen,
    tabName,
    styleClasses.category,
    styleClasses.active
  );
  return (
    <Link to={linkTo} className={className}>
      {label}
    </Link>
  );
};

export default CategoryTab;
