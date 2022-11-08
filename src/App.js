/* eslint-disable no-unused-vars */
import './App.css';
import SearchIcon from './search.svg'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard'

const API_URL = "http://omdbapi.com?apikey=a79a7000"

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("spider man")
  }, [])

  return (
    <div className="app">   
      <h1>MovieHUB</h1> 

      <div className='search'>
        <input 
          value={searchTerm} 
          placeholder='search for movies'
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="" onClick={() => {searchMovies(searchTerm)}}/>
      </div>

      { movies?.length > 0 
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
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

//a79a7000 api key
export default App;
