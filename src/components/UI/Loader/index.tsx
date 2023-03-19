import { ReactNode } from "react";
import { Spinner } from "react-bootstrap";

import styleClasses from "src/components/UI/Loader/styles.module.scss";

interface LoaderProps {
  children: ReactNode;
  isLoading: boolean;
}

const Loader = ({ children, isLoading }: LoaderProps) => {
  return (
    <>
      {isLoading ? (
        <div className={styleClasses.spinnerWrapper}>
          <Spinner animation="border" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
