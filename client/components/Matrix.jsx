import React, { useState, useEffect } from 'react'
import request from 'superagent'
import Movie from './Movie'
import { getMovies } from '../api'

function Matrix() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    request.get('https://api.themoviedb.org/3/list/7092693?api_key=21404fdcc8723007e32347fcedff9bb4')
      .then(response => setMovies(response.body.items))
  }, [])

  const [ratings, setRatings] = useState([])
  useEffect(() => {
    getMovies()
      .then(ratings => {
        setRatings(ratings)
      })
  }, [])

  return (
    <div className='page-matrix'>
      <h1 className="title">Welcome to the Matrix</h1>
      <container className="container" >
        {movies.map(movie => <Movie movieData={movie} />)}
        {/* {ratings.map(rating => <div><p>
        Likes: {rating.likes} <br/>
        Dislikes: {rating.dislikes} <br/>
        </p>
          </div>
          )} */}
      </container>

    </div >
  );
}

export default Matrix;
