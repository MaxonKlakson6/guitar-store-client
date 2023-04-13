import { ReactNode } from "react";
import styleClasses from "src/pags/Store/components/Filter/styles.module.scss";

interface CheckBoxBlockProps {
  children: ReactNode;
}

const CheckBoxBlock = ({ children }: CheckBoxBlockProps) => {
  return (
    <div className={styleClasses.filterBlock}>
      <h4 className={styleClasses.filterTitle}>Материал</h4>
      <div className={styleClasses.checkBoxWrapper}>{children}</div>
    </div>
  );
};

export default CheckBoxBlock;
