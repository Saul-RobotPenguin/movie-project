import axios from 'axios'

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const genres = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
};

fetch(url, genres)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

export {
    genres
}