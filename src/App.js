import React, { useState, useEffect } from 'react';
import '../src/style/index.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieDetailsModal from './components/MovieDetailsModal';
import { fetchMovies, fetchMovieDetails } from './api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies().then(setMovies); // Fetch popular movies by default
  }, []);

  const handleSearch = async () => {
    console.log('handleSearch called with:', searchTerm); // Debug
    if (searchTerm.trim()) { // Check for valid input
      const results = await fetchMovies(searchTerm);
      setMovies(results);
    } else {
      console.log('Search term is empty'); // Log for debugging
    }
  };  

  const handleMovieClick = async (movieId) => {
    const details = await fetchMovieDetails(movieId);
    setSelectedMovie(details);
  };

  const closeModal = () => setSelectedMovie(null);

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={handleMovieClick} />
        ))}
      </div>
      {selectedMovie && <MovieDetailsModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
};

export default App;
