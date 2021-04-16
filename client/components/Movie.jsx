import React from 'react'

function Movie(props) {
    return(
    <div>
        <img className="poster" src={(`/images/${props.movieData.title}.jpg`)} />
        <div className="details">
            <p>Title: {props.movieData.title}</p>
            <p>Release Date: {props.movieData.release_date}</p>
            <p>Vote Average: {props.movieData.vote_average}</p>
            <p>Vote Count: {props.movieData.vote_count}</p>
        </div>
    </div>
    )}

export default Movie