import {fetchNetflixOriginals} from "../apiService.js";
//console.log(fetchNetflixOriginals)

export default function addElementMovie () {

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
      
}
document.body.onload = addElementMovie;    
//console.log(addElementMovie);



/*
export default function addElementImg () {
       
  const addDiv = document.getElementById("netflix");
  const elementDiv = document.createElement('img');
  elementDiv. className = "movies__container--movie-image";
  elementDiv. src="https://image.tmdb.org/t/p/original//MoEKaPFHABtA1xKoOteirGaHl1.jpg";      
  addDiv.appendChild(elementDiv);
  console.log(addDiv);  
  
}
document.body.onload = addElementImg;    
console.log(addElementImg);*/