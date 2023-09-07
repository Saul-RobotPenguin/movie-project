import React, { useEffect, useState } from "react";
import { getMovies } from "../../resources/index";
import MovieCard from "../Cards/MovieCard";
import MovieNavbar from "../Navbar/MovieNavbar";
// import Movies from "./Movies";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovies(setPopularMovies);
  }, []);

  return (
    <div>
      <MovieNavbar />
      <MovieCard popularMovies={popularMovies} />
    </div>
  );
};

export default HomePage;
