import { FC } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./style.scss";

type Props = {
  hideNav?: boolean;
};

const MainNav: FC<Props> = ({ hideNav }) => {
  const { me, logOut } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="brand">Films Films Films</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {!hideNav ? (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
                <Link className="nav-link" to={"/recommend"}>
                  Recomendar Película
                </Link>
                <NavDropdown title="Usuario" id="basic-nav-dropdown">
                  <Link className="nav-link" to={"/profile"}>
                    {me?.name}
                  </Link>
                  <NavDropdown.Divider />
                  <Link className="nav-link" to={"/friends"}>
                    Mis Amigos
                  </Link>
                  <Button onClick={logOut} variant="dark" className="logout">
                    {" "}
                    Log Out{" "}
                  </Button>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to={"/login"}>
                  Ingresar
                </Link>
                <Link className="nav-link" to={"/signup"}>
                  Registrarme
                </Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export { MainNav };
