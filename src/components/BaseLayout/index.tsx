import { ReactNode } from "react";
import Header from "src/components/Header";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default BaseLayout;
