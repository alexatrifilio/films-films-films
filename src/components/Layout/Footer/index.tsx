import { FC } from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

const Footer: FC = () => {
  return (
    <footer className="foot">
      <Container>Brought to you by &copy; Alexa</Container>
    </footer>
  );
};

export { Footer };
