import { ReactNode, useEffect } from "react";

import Header from "src/components/Header";
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
  const [createUser, result] = useCreateUnauthorizedUserMutation();

  useEffect(() => {
    if (!token) {
      createUser();
    }
  }, []);

  useEffect(() => {
    if (result.data) {
      dispatch(saveToken(result.data));
    }
  }, [result.data]);

  return (
    <>
      <Header />
      <main className={styleClasses.main}>{children}</main>
      <footer className={styleClasses.footer}>
        контакты адреса туда сюда внизу каждой страницы +375336910060 москва дом
        2 улица 3
      </footer>
    </>
  );
};

export default BaseLayout;
