// import axios from 'axios'

import axios from 'axios';

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const movies = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
};

let movieResults
const getMovies = async (callback) => {
  const data = await axios.get(url, movies)
  callback(data.data.results)
  console.log(data.data.results)
}

// const movieNames = await fetch(url, movies)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .then(data => {
//     movieResults=data
//   })
//   .catch(err => console.error('error:' + err));

export { getMovies };
