import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieNavbar from "./MovieNavbar";
import { BrowserRouter } from "react-router-dom";
import React from "react";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieNavbar />
    </BrowserRouter>
  </React.StrictMode>
);

describe("Movie Navbar Test", () => {
  const MovieNavbar = screen.queryByTestId("Navbar");
  const Movie = screen.queryByTestId("Movie");
  const Search = screen.queryByTestId("Search");

  test("Navbar Renders", () => {
    expect(MovieNavbar).toBeInTheDocument();
  });

  test("Navbar Has Necessary Text Content", () => {
    expect(Movie).toHaveTextContent("Movie Website");
    expect(Search).toHaveTextContent("Search");
  });
});
