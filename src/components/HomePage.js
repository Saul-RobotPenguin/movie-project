import React, { useEffect, useState } from "react";
import { genres } from "../resources/index";
import MovieCard from "./MovieCard";
import MovieNavbar from "./MovieNavbar";

const HomePage = () => {
  console.log(genres);

  return (
    <div>
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
