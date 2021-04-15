import React from 'react'

function Movie(props) {
    return <>
        <div>
            <img src={`${props.movieData.title}.png`} />
            <p>Title: {props.movieData.title}</p>
            <p>Release Date: {props.movieData.release_date}</p>
            <p>Vote Average: {props.movieData.vote_average}</p>
            <p>Vote Count: {props.movieData.vote_count}</p>
        </div>
    </>
}

export default Movie