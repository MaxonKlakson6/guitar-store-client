import { ReactNode } from "react";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

interface CheckBoxBlockProps {
  children: ReactNode;
  title: string;
  wrapperClassName?: string;
}

const CheckBoxBlock = ({
  children,
  title,
  wrapperClassName,
}: CheckBoxBlockProps) => {
  return (
    <div className={styleClasses.filterBlock}>
      <h4 className={styleClasses.filterTitle}>{title}</h4>
      <div className={wrapperClassName || styleClasses.checkBoxWrapper}>
        {children}
      </div>
    </div>
  );
};

export default CheckBoxBlock;
