import { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
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
      <main className={`page ${page}`}>
        <Container className="px-4 py-2">{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
