import React, { useState, useEffect } from 'react'
import request from 'superagent'
import Movie from './Movie'

function Bustblocker() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    request.get('https://api.themoviedb.org/3/list/7092691?api_key=21404fdcc8723007e32347fcedff9bb4')
      .then(response => setMovies(response.body.items))
  }, [])

  return (
    <div className='page-bustblocker'>
      <h1 className="title">Bustblocker</h1>
      <container className="container" >
        {movies.map(movie => <Movie movieData={movie} />)}
      </container>
    </div>
  )
}

export default Bustblocker
