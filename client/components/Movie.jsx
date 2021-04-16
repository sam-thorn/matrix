import React from 'react'

function Movie(props) {
    return <>
            <img className="poster" src={(`/images/${props.movieData.title}.jpg`)} />
            <p>Title: {props.movieData.title}</p>
            <p>Release Date: {props.movieData.release_date}</p>
            <p>Vote Average: {props.movieData.vote_average}</p>
            <p>Vote Count: {props.movieData.vote_count}</p>
    </>
}

export default Movie