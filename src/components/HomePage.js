import React, { useEffect, useState } from "react";
import { getMovies } from "../resources/index";
import MovieCard from "./MovieCard";
import MovieNavbar from "./MovieNavbar";
// import Movies from "./Movies";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovies(setPopularMovies);
  }, []);

  console.log(popularMovies, "hello");

  return (
    <div>
      <MovieNavbar />
      <MovieCard popularMovies={popularMovies} />
    </div>
  );
};

export default HomePage;
