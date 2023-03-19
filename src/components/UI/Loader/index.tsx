import { ReactNode } from "react";
import { Spinner } from "react-bootstrap";

import styleClasses from "src/components/UI/Loader/styles.module.scss";

interface LoaderProps {
  children: ReactNode;
  isLoading: boolean;
}
// TODO: set loader in the middle of the page and create product interface
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
