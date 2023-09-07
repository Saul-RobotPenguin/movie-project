import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPage from "./SearchPage";
import { BrowserRouter } from "react-router-dom";
import React from "react";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchPage />
    </BrowserRouter>
  </React.StrictMode>
);

describe("Search Page Test", () => {
  const Searchbar = screen.queryByTestId("SearchBar");

  test("Search Bar Renders", () => {
    expect(Searchbar).toBeInTheDocument();
  });

  const SearchButton = screen.queryByTestId("SearchButton");

  test("Searchbar Has Necessary Text Content", () => {
    expect(SearchButton).toHaveTextContent("Search");
  });
});
