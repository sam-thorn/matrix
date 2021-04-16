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
      <a href="/"><h1 className="title">Welcome to the Matrix</h1></a>
      <container className="container" >
        {movies.map(movie => <Movie movieData={movie} />)}
      </container>

    </div>
  );
}

export default Matrix;
