import { FC } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  hideNav?: boolean;
};

const MainNav: FC<Props> = ({ hideNav }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Films Films Films</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {!hideNav ? (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
                <Link className="nav-link" to={"/friends:id"}>
                  Buscar Amigos
                </Link>
                <NavDropdown title="Usuario" id="basic-nav-dropdown">
                  <Link className="nav-link" to={"/user"}>
                    Mi Peril
                  </Link>
                  <NavDropdown.Divider />
                  <Link className="nav-link" to={"/friends"}>
                    Mis Amigos
                  </Link>
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
