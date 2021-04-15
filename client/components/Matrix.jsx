import React, { useState, useEffect } from 'react'
// import { request } from '../../server/server'
import Movie from './Movie'
import request from 'superagent'

function Matrix () {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    request.get('https://api.themoviedb.org/3/collection/2344?api_key=21404fdcc8723007e32347fcedff9bb4')
      .then(response => setMovies(response.body))
  }, [])

  return (
    <div className='page-matrix'>
      <h1>Welcome to the Matrix</h1>
      {/* MatrixMovies => MatrixMovies.map(movie => <Movie movie={ } />){' '} */}
      {console.log(movies)}
    </div>
  )
}

export default Matrix
