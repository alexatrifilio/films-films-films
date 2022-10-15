import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const RecommendPage = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {}, [movie]);

  return (
    <Layout page="recommend">
      <Form>
        <Form.Control
          type="text"
          placeholder="Buscar Películas"
          onChange={(e) => {
            setMovie(e.target.value);
          }}
        />
      </Form>
    </Layout>
  );
};

export const Recommend = withAuth(RecommendPage);
