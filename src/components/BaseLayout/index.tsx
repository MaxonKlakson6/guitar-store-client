import { ReactNode, useEffect } from "react";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Loader from "src/components/UI/Loader";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { tokenSelector } from "src/store/selectors/authSelectors";
import { useCreateUnauthorizedUserMutation } from "src/api/authApi";
import { saveToken } from "src/store/reducers/authSlice";
import styleClasses from "src/components/BaseLayout/styles.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const token = useAppSelector(tokenSelector);
  const dispatch = useAppDispatch();
  const [createUser, { data: newToken, isLoading }] =
    useCreateUnauthorizedUserMutation();

  useEffect(() => {
    if (!token) {
      createUser();
    }
  }, []);

  useEffect(() => {
    if (newToken) {
      dispatch(saveToken(newToken));
    }
  }, [newToken]);

  return (
    <Loader isLoading={isLoading}>
      <Header />
      <main className={styleClasses.main}>{children}</main>
      <Footer />
    </Loader>
  );
};

export default BaseLayout;
