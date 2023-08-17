import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Movies.css";

const mystyle = {
  width: "300px",
  height: "300px",
};

const Movies = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div style={mystyle}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.barbie-themovie.com/images/gallery/img1.jpg"
                />
                <Card.Body>
                  <Card.Title>Barbie (2023)</Card.Title>
                  <Button variant="primary">Hover method</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="flip-card-back">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>About Barbie (2023)</Card.Title>
                <Card.Text>Year : 2023</Card.Text>
                <Card.Text>
                  Synopsis : The film sees Margot Robbie's incarnation of the
                  famous Mattel doll travel from "Barbieland" to the real world
                  after experiencing thoughts of death and cellulite. There, she
                  discovers that the human world is very different from her own
                  and begins to question everything she knows.
                </Card.Text>
                <Card.Text>Ratings : 4.9 </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
