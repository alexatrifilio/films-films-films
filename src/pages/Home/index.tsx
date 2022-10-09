import { FC } from "react";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const HomePage: FC = () => {
  return (
    <Layout page="homepage">
      <div>PAGINA PRINCIPAL</div>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
