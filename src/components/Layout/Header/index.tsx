import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainNav } from "../MainNav";

type Props = {
  hideNav?: boolean;
};

const Header: FC<Props> = () => {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <h1>
              <Link to={"./"}>films film</Link>
            </h1>
          </Col>
          <Col sm={9}>
            <MainNav />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export { Header };
