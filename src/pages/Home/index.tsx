import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout, Posts } from "../../components";
import { withAuth } from "../../hoc";

const HomePage: FC = () => {
  return (
    <Layout page="homepage">
      <Container>
        <Row>
          <Col xs={4}>
            <Row>
              <div> esto es amigos a agregar </div>
            </Row>
            <Row>
              <Col>
                <div>esto es Amigos agregados</div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              {" "}
              <div>ACA EL FORM</div>
            </Row>
            <Row>
              <Posts />
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
