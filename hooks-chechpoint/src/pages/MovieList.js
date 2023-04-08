import React, { useState } from 'react';
import Movies from '../data/Data';
import MovieCard from '../components/MovieCard';
import { TextField, Button } from '@mui/material';

function MovieList() {
  const [movies, setMovies] = useState(Movies);
  const [searchTitle, setSearchTitle] = useState('');
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    imageUrl: '',
    rating: ''
  });

  const handleSearchTitleChange = (event) => {
    setSearchTitle(event.target.value.toLowerCase());
  };

  const handleNewMovieChange = (event) => {
    const { name, value } = event.target;
    setNewMovie(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddMovie = () => {
    setMovies(prevMovies => [...prevMovies, { ...newMovie, id: prevMovies.length + 1 }]);
    setNewMovie({ title: '', director: '', imageUrl: '', rating: '' });
  };

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTitle));

  return (
    <>
      <TextField
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 50 }}
        label="Search"
        variant="outlined"
        value={searchTitle}
        onChange={handleSearchTitleChange}
      />
      <div className="container">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} img={movie.imageUrl} title={movie.title} director={movie.director} rate={movie.rating} />
        ))}
      </div>
      <div>
        <h1>Add a movie:</h1>
        <div className="container">
          <TextField label="Title" variant="outlined" name="title" value={newMovie.title} onChange={handleNewMovieChange} />
          <TextField label="Director" variant="outlined" name="director" value={newMovie.director} onChange={handleNewMovieChange} />
          <TextField label="Image URL" variant="outlined" name="imageUrl" value={newMovie.imageUrl} onChange={handleNewMovieChange} />
          <TextField label="Rating" variant="outlined" name="rating" value={newMovie.rating} onChange={handleNewMovieChange} />
          <Button onClick={handleAddMovie}>Add</Button>
        </div>
      </div>
    </>
  );
}

export default MovieList;
