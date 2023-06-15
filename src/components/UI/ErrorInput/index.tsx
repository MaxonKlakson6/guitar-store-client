import { ReactNode } from "react";
import stylesClasses from "src/components/UI/ErrorInput/styles.module.scss";

interface ErrorInputProps {
  children?: ReactNode;
  error?: string;
  isTouched?: boolean;
}

const ErrorInput = ({ children, error, isTouched }: ErrorInputProps) => {
  return (
    <div className={stylesClasses.inputWrapper}>
      {children}
      <p className={stylesClasses.error}>{isTouched && error}</p>
    </div>
  );
};

export default ErrorInput;
