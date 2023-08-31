import React from 'react'
import { useState} from 'react'
import Movies from './MovieCard'
import MovieNavbar from './MovieNavbar'
import axios from 'axios'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [popularMovies, setPopularMovies] = useState('')
  
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const Search = async (e) => {
    e.preventDefault()
    const { data } = await axios.get('https://api.themoviedb.org/3/search/movie', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      params: {
        query: search,
        page: 1,
        limit: 5
      }
    })
    console.log(data.results)
    setPopularMovies(data.results)
    setSearch('')
  }


  return(
    <div>
        <MovieNavbar />
        <div>
            <h1>Search Page</h1>
         <form className="searchform" onSubmit={Search}>
          <input
            className="searchinput"
            type="text"
            name="search"
            value={search}
            placeholder="Search"
            onChange={onChange}
          />
          <button className="searchbutton" type="submit"></button>
        </form>
        <div>
            <Movies popularMovies={popularMovies}/>
        </div>
        </div>
    </div>
  )
}

export default SearchPage