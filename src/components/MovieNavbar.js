import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const MovieNavbar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary " data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              <img
                alt=""
                src="https://flaticons.net/custom.php?i=6ZPFPpHZAPgvSEIAIZIG9h9YljJuV&format=png&size=256"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Movie Website
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default MovieNavbar;
