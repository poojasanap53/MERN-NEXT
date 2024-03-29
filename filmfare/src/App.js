import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

//api key - bd3643e9

const API_URL = "http://www.omdbapi.com/?apikey=bd3643e9";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="App">
      <h1>MovieMafia</h1>
      <div className="search">
        <input type="text" placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie)=>(
            <MovieCard movie = {movie}/>
          ))}
      </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
      
    </div>
  );
}

export default App;
