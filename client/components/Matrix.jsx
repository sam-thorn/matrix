import React, { useState, useEffect } from 'react'
import request from 'superagent'
import Movie from './Movie'

function Matrix() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    request.get('https://api.themoviedb.org/3/list/7092693?api_key=21404fdcc8723007e32347fcedff9bb4')
      .then(response => setMovies(response.body.items))
  }, [])
  
  return (
    <div className='page-matrix'>
      <h1>Welcome to the Matrix</h1>
      {movies.map(movie => <Movie movieData={movie} />)}
    </div>
  );
}

export default Matrix;
