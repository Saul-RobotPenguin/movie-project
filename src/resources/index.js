import axios from 'axios'

//   const options = {
//     method: 'GET',
//     url: 'https://unogs-unogs-v1.p.rapidapi.com/static/genres',
//     headers: {
//       'X-RapidAPI-Key': 'kUcq1Xqq8CAJ8FNm2QzQe8PopG0ChPgx',
//       'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }
var myHeaders = new Headers();
myHeaders.append("apikey", "kUcq1Xqq8CAJ8FNm2QzQe8PopG0ChPgx");

let genres = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/unogs/static/genres", genres)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

export {
    genres
}