import { ChangeEvent, ReactNode } from "react";
import stylesClasses from "src/components/UI/InputWithLabel/styles.module.scss";

interface InputWithLabelProps {
  children: ReactNode;
  label: string;
  labelClassName?: string;
}

const InputWithLabel = ({
  children,
  label,
  labelClassName,
}: InputWithLabelProps) => {
  return (
    <div>
      <h4 className={`${stylesClasses.label} ${labelClassName}`}>{label}</h4>
      {children}
    </div>
  );
};

export default InputWithLabel;
