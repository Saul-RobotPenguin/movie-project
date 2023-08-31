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

const Movies = ({ popularMovies }) => {
  let movieList = popularMovies
    ? popularMovies.map((movie) => (
        <div css={divStyles}>
          <div
            className="flip-card"
            style={{ marginRight: "4rem", marginBottom: "225px" }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div style={mystyle}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      width={400}
                      height={225}
                      src={
                        `
                    https://image.tmdb.org/t/p/original` + movie.backdrop_path
                      }
                    />
                    <Card.Body>
                      <Card.Title>{movie.name || movie.title}</Card.Title>
                      {/* <Button variant="primary">Hover method</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="flip-card-back">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>About {movie.name || movie.title}</Card.Title>
                    <Card.Text>
                      Year : {movie.first_air_date || movie.release_date}
                    </Card.Text>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Card.Text>Ratings : {movie.vote_average} </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ))
    : null;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {movieList}
    </div>
  );
};

export default Movies;
