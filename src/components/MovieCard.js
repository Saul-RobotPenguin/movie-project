import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { css } from "@emotion/react";

import "./Movies.css";

const mystyle = {
  width: "300px",
  height: "300px",
};

const divStyles = css`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 10px;
  width: 18rem;
`;

const Movies = () => {
  return (
    <>
      <div css={divStyles}>
        <div
          className="flip-card"
          style={{ marginRight: "4rem", marginBottom: "300px" }}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
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
            <div className="flip-card-back">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>About Barbie (2023)</Card.Title>
                  <Card.Text>Year : 2023</Card.Text>
                  <Card.Text>
                    Synopsis : The film sees Margot Robbie's incarnation of the
                    famous Mattel doll travel from "Barbieland" to the real
                    world after experiencing thoughts of death and cellulite.
                    There, she discovers that the human world is very different
                    from her own and begins to question everything she knows.
                  </Card.Text>
                  <Card.Text>Ratings : 4.9 </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
