import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import Navbar from './Components/Navbar';
import FormAddMovie from './Components/FormAddMovie';
import data from './data/data';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import Filtre from './Components/Filtre';

export const MovieContext=createContext()

function App() {
 
  const [movieList,setMovieList]=useState([]);
 
  const [filteredMovies, setFilteredMovies] = useState([]);

 const receiveData = (data) => {
  console.log("Données reçues :", data);
  setMovieList(data);
};
 useEffect(() => {
  const storageMovies = localStorage.getItem("movies");
  
  if (storageMovies) {
    setMovieList(JSON.parse(storageMovies));
  } else {
    localStorage.setItem('movies', JSON.stringify(data));
    setMovieList(data);
  }

}, []);  
 // Filtrer les films
 const handleFilteChange = ({ title, note }) => {
  let filteredMovies = movieList;
 
  if (title) {
    
    filteredMovies = filteredMovies.filter(
      (movie) => movie.original_title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (note) {
    filteredMovies = filteredMovies.filter((movie) => movie.vote_average >= note);
  }

  setFilteredMovies(filteredMovies);
};

   
  return (
    <>
      <Navbar/>
      
          <FormAddMovie sendData={receiveData}  movies={movieList}/>
          <Filtre handleFilterChange={handleFilteChange}/>
          <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movieList} />
    
    </>
    
  );
}

export default App;
