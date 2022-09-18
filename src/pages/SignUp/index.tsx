import { FC } from "react";
import { Card, Container } from "react-bootstrap";
import { usersApi } from "../../api";
import { Layout } from "../../components";
import { useUser } from "../../hooks";
import { SignUpForm } from "./Form";

const SignUp: FC = () => {
  const { onSignUp } = useUser();

  return (
    <Layout page="signup">
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Registrate</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Es rápido y fácil
            </Card.Subtitle>
            <Container>
              <SignUpForm onSignUp={onSignUp} />
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export { SignUp };
