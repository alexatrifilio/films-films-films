import { FC, ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
  page: string;
  hideNav?: boolean;
};

const Layout: FC<Props> = ({ children, page, hideNav }) => {
  return (
    <>
      <Header hideNav={hideNav} />
      <main className={`page ${page}`}> {children} </main>
    </>
  );
};

export { Layout };
