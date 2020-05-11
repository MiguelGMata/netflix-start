import {fetchMovie} from "./apiService.js";
import Header from "./components/Header.mjs";
import {fetchNetflixOriginals} from "./apiService.js";


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
})();*/

(async() => {
  let netflixOriginals = await fetchNetflixOriginals();
  let container = document.getElementById("movies-container-1");
  let movies = netflixOriginals.results;

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie__netflix";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
  }    
})();

document.body.onload = fetchNetflixOriginals;    
//console.log(fetchNetflixOriginals);

function addElementDivMovie () {
  
  const addD = document.getElementsByClassName("movies-container");
  const element = document.createElement('div');
      element. className = "movies__container--movie__netflix";
  addD.appendChild(element);
  console.log(addD);  
}
document.body.onload = addElementDivMovie;    
console.log(addElementDivMovie);

function addElementSpan () {
  
  const addDiv = document.getElementsByClassName('movies-container');
  const elementDiv = document.createElement('span');
      elementDiv.innerHTML = `
      <span id="Miguel"></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>        
      `;
  addDiv.appendChild(elementDiv);
  console.log(addDiv);  
}
document.body.onload = addElementSpan;    
//console.log(addElementSpan);