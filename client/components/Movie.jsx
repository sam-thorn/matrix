import React, { useState, useEffect } from 'react'
import { getMovies } from '../api'


function Movie(props) {

    const [ratings, setRatings] = useState([])

    useEffect(() => {
        getMovies()
            .then(ratings => {
                setRatings(ratings)
            })
    }, [])

    const movie = props.movieData.title
    const movieRates = ratings.find(rating => rating.title === movie)
    console.log(movieRates)

    return <>
        <img className="poster" src={(`/images/${props.movieData.title}.jpg`)} />
        <p>Title: {props.movieData.title}</p>
        <p>Release Date: {props.movieData.release_date}</p>
        <p>Vote Average: {props.movieData.vote_average}</p>
        <p>Vote Count: {props.movieData.vote_count}</p>
        <p>Likes: {movieRates && movieRates.likes}</p>
        <p>Disikes: {movieRates && movieRates.dislikes}</p>
    </>
}

export default Movie