import { ReactNode } from "react";

import Header from "src/components/Header";
import styleClasses from "src/components/BaseLayout/styles.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
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
