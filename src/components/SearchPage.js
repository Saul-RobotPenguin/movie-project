import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const Search = async (e) => {
    e.preventDefault()
    const { data } = await axios.get('https://api.themoviedb.org/3/search/keyword', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        query: search,
        page: 1
      }
    })


  return(
    <div></div>
  )
}

export default SearchPage