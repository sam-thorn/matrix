import React, { useState, useEffect } from 'react'
import request from 'superagent'
import Movie from './Movie'

function Bustblocker () {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    request.get('https://api.themoviedb.org/3/list/7092691?api_key=21404fdcc8723007e32347fcedff9bb4')
      .then(response => setMovies(response.body.items))
  }, [])
  return (
    <div className='page-bustblocker'>
      <h1>Bustblocker</h1>
      {/* AllMovies => AllMovies.map(movie => <Movie movie={ } />) */}
      {movies.map(movie => <p>{movie.title} {movie.release_date} {movie.vote_average} {movie.vote_count}</p>)}
    </div>
  )
}

export default Bustblocker
