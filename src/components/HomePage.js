import React, { useEffect, useState } from "react";
import { getMovies } from "../resources/index";
import Movies from "./Movies";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovies(setPopularMovies)
  }, [])

  console.log(popularMovies, 'hello')

  return (
    <div>
      <Movies popularMovies={popularMovies}/>
    </div>
  );
};

export default HomePage;
