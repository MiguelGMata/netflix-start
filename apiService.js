const APÎ_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "36cbef6d46cc15d68d57b7673b17c4a2";


export function fetchMovie(movieId, cb) {
  const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;
//console.log(url);
    var xhr_object = new XMLHttpRequest();
    xhr_object.open("GET", url, false);
    xhr_object.send(null);

    if (xhr_object.readyState == 4) {
      return cb(JSON.parse(xhr_object.responseText));
    }
  
}


/*
 export default function fetchMovie(movieId) {
   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;
   console.log(url);
   return new Promise((resolve, reject) => {
     var xhr_object = new XMLHttpRequest();
     xhr_object.open("GET", url, false);
     xhr_object.send(null);
     if (xhr_object.readyState == 4) {
       resolve(JSON.parse(xhr_object.responseText));
     }   });
 }*/
 
/*
 export default function fetchMovie(movieId) {
   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;
   return fetch(url).then(res => {
     return res.json()
   }).then(movie => {
       return movie;
   })
 }
*/
/*
export default async function fetchMovie(movieId) {
   const url = `${API_URL}${movieID}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
   console.log(movie);
   return movie;
 }*/


export async function fetchNetflixOriginals() {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  let res = await fetch(url);
  let netflixOriginals = await res.json();
  //console.log(netflixOriginals)
  return netflixOriginals;
}



export function fetchTrending() {}

export function fetchTopRated() {}

export function fetchByGenreMovies(genre) {}


 
