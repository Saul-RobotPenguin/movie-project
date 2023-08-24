import React, { useEffect, useState } from "react";
import { getMovies } from "../resources/index";
import MovieCard from "./MovieCard";
import MovieNavbar from "./MovieNavbar";
import Movies from "./Movies";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovies(setPopularMovies)
  }, [])

  console.log(popularMovies, 'hello')

  return (
    <div>
      <Movies />
      <MovieNavbar />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default HomePage;
