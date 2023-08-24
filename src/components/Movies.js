import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Movies.css";

const mystyle = {
  width: "300px",
  height: "300px",
};

const Movies = ({ popularMovies }) => {
  let movieList = popularMovies
  ? popularMovies.map((movie) => (
    <div class="flip-card" key={movie.id}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div style={mystyle}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`
                  https://image.tmdb.org/t/p/original`+movie.backdrop_path}
                />
                <Card.Body>
                  <Card.Title>{movie.name}</Card.Title>
                  <Button variant="primary">Hover method</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="flip-card-back">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>About {movie.name || movie.title}</Card.Title>
                <Card.Text>Year : {movie.first_air_date || movie.release_date}</Card.Text>
                <Card.Text>
                  {movie.overview}
                </Card.Text>
                <Card.Text>Ratings : {movie.vote_average} </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div> 
  )) : null
  return (
    <div>
      {movieList}
    </div>
  );
  }

export default Movies;
