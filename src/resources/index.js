import axios from 'axios'

let genres = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    "apikey": `${process.env.REACT_APP_API_KEY}`
  }
};

fetch("https://api.apilayer.com/unogs/static/genres", genres)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

export {
    genres
}