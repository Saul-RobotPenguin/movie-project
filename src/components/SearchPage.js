import React from 'react'
import { useState, useEffect } from 'react'
import {MovieCard} from './MovieCard'
import axios from 'axios'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState('')
  
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const Search = async (e) => {
    e.preventDefault()
    const { data } = await axios.get('https://api.themoviedb.org/3/search/keyword', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      params: {
        query: search,
        page: 1
      }
    })
    setMovies(data)
  }


  return(
    <div>
        <div>
            <form className="searchform" onSubmit={Search}>
          <input
            className="searchinput"
            type="text"
            name="search"
            value={search}
            placeholder="Search"
            onChange={onChange}
          >search</input>
          <button className="searchbutton" type="submit"></button>
        </form>
        <div>
            <MovieCard movies={popularMovies}/>
        </div>
        </div>
    </div>
  )
}

export default SearchPage