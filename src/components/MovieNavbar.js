import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MovieNavbar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary " data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://flaticons.net/custom.php?i=6ZPFPpHZAPgvSEIAIZIG9h9YljJuV&format=png&size=256"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Movie Website
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default MovieNavbar;
