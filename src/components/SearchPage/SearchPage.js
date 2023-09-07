import React from "react";
import { useState } from "react";
import Movies from "../Cards/MovieCard";
import MovieNavbar from "../Navbar/MovieNavbar";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [popularMovies, setPopularMovies] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const Search = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        params: {
          query: search,
          page: 1,
          limit: 5,
        },
      }
    );
    setPopularMovies(data.results);
    setSearch("");
  };

  return (
    <div>
      <MovieNavbar />
      <div>
        <h1
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}>
          Search Page
        </h1>

        <br />
        <Container className="mt-5 mb-5" data-testid="SearchBar">
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Form className="d-flex searchform" onSubmit={Search}>
                <Form.Control
                  placeholder="Search"
                  className="searchinput me-2"
                  type="text"
                  name="search"
                  value={search}
                  onChange={onChange}
                  aria-label="Search"
                />
                <Button
                  data-testid="SearchButton"
                  className="searchbutton"
                  type="submit">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        <br />
        <div>
          <Movies popularMovies={popularMovies} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
