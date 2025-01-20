import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    { title: 'Parasite', genre: 'Thriller', releaseYear: 2019 },
    { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
    { title: 'Toy Story', genre: 'Animation', releaseYear: 1995 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  
  // Get unique genres
  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  // Filter movies based on selected genre
  const filteredMovies = 
    selectedGenre === 'All Genres' 
      ? movies 
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>
      <div className="movie-genre">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <ul className="movie-list">
        {filteredMovies.map((movie, index) => (
          <li
            key={index}
            className="movie-item"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;