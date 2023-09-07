import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieCard from "./MovieCard";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

const movieData = [
  {
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    original_language: "en",
    release_date: "2023-05-31",
    vote_average: 8.444,
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse",
  },
];
render(<MovieCard popularMovies={movieData} />);

describe("Movie Card Test", () => {
  const MovieCard = screen.queryByTestId("Card");

  test("Card Renders", () => {
    expect(MovieCard).toBeInTheDocument();
  });

  test("Card Has Necessary Text Content", () => {
    expect(MovieCard).toHaveTextContent("Spider-Man: Across the Spider-Verse");
    expect(MovieCard).toHaveTextContent(
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse"
    );
    expect(MovieCard).toHaveTextContent(8.444);
  });
});
