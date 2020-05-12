import Header from "./components/Header.mjs";
import Modale from "./components/Modale.mjs";
console.log(Modale)
import Movie from "./components/Movie.mjs";
//console.log(Movie)
import {fetchMovie} from "./apiService.js";
//console.log(fetchMovie)
import {fetchTrending} from "./apiService.js";
import {fetchTopRated} from "./apiService.js";
import {fetchByGenreMovies} from "./apiService.js";
import {fetchByGenre} from "./apiService.js";


  
(() => {
  //Callback
  const getResponse = (data) => {
    return data;
  };
  try {
    let movie = fetchMovie(157336, getResponse);
    //console.log(movie);
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
   
  }
  catch(e){
    //console.log(e)
  }
})();

  (async() => {
    let netflixTrending = await fetchTrending();
    let container = document.getElementById("movies-container-2");
    let movies = netflixTrending.results;
  
    for(let i = 0 ; i < movies.length ; i++){
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
    }    
  })();


  (async() => {
    let netflixTopRated = await fetchTopRated();
    let container = document.getElementById("movies-container-3");
    let movies = netflixTopRated.results;
//
    for (let i = 0; i < movies.length; i++) {
        let movie = document.createElement('div');
        movie.className = "movies__container--movie";
        let image = document.createElement('img');
        image.className = "movies__container--movie-image";
        image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
        container.appendChild(movie);
        movie.appendChild(image);
        if(movies[i].poster_path === null){
          image.style.display = 'none';
        }
    }
})();

(async() => {
  let netflixByGenreAction = await fetchByGenreMovies(28);
  let container = document.getElementById("movies-container-4");
  let movies = netflixByGenreAction.results;

  for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
  }
})();

(async() => {
  let netflixByGenreAction = await fetchByGenreMovies(35);
  let container = document.getElementById("movies-container-5");
  let movies = netflixByGenreAction.results;

  for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
  }
})();

(async() => {
  let netflixByGenreAction = await fetchByGenreMovies(99);
  let container = document.getElementById("movies-container-6");
  let movies = netflixByGenreAction.results;

  for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
  }
})();

(async() => {  //para verificar les codigo
let movie = await fetchByGenre();
//console.log(movie)
})();
//2
// (() => {
//     let movie = fetchMovie(157336).then(movie => {
//         console.log(movie)
//         document.getElementById("header").innerHTML = Header(movie);
//         document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//     })

// })();

//3
// (async () => {
//     let movie = await fetchMovie(616);
//     console.log(movie)
//     document.getElementById("header").innerHTML = Header(movie);
//     document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
// })();
/*
(async() => {
  let netflixOriginals = await fetchNetflixOriginals()
  console.log(netflixOriginals)       
})();

(async() => {
  let netflixOriginals = await fetchNetflixOriginals();
  let container = document.getElementById("netflix");
  let movies = netflixOriginals.results;

  for(let i = 1 ; i < movies.length ; i++){
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    container.appendChild(image);
  }    
})();
*/
//document.body.onload = fetchNetflixOriginals;    
//console.log(fetchNetflixOriginals)