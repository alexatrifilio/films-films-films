import { FC } from "react";
import { Card, Container } from "react-bootstrap";
import { Layout, LogInForm } from "../../components";
import { withAuth } from "../../hoc";
import { useAuth } from "../../hooks/useAuth";
import "./style.scss";

const LogInPage: FC = () => {
  const { logIn } = useAuth();
  return (
    <Layout page="login" hideNav>
      <Container>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Ingresá a tu cuenta
            </Card.Subtitle>
            <Container>
              <LogInForm onLogin={logIn} />
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export const LogIn = withAuth(LogInPage);
