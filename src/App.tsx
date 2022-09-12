import { useEffect } from "react";
import { countriesApi } from "./api/countries";
import { Layout } from "./components";

const App = () => {
  useEffect(() => {
    const data = countriesApi.get();
  }, []);

  return (
    <Layout page="main" hideNav>
      <div style={{ height: "90vh" }}>holi</div>
    </Layout>
  );
};

export { App };
