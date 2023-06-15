import { ReactNode, useEffect } from "react";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { useAppSelector } from "src/hooks/reduxHooks";
import { tokenSelector } from "src/store/selectors/authSelectors";
import { useCreateUnauthorizedUserMutation } from "src/api/authApi";
import styleClasses from "src/components/BaseLayout/styles.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const token = useAppSelector(tokenSelector);
  const [createUser] = useCreateUnauthorizedUserMutation();

  useEffect(() => {
    if (!token) {
      createUser();
    }
  }, [token]);

  return (
    <>
      <Header />
      <main className={styleClasses.main}>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
