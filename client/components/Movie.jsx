import React from 'react'

function Movie(props) {
    return(
    <div>
        <img className="poster" src={(`/images/${props.movieData.title}.jpg`)} />
        <div className="details">
            <p> <span className="props">Title:</span> {props.movieData.title}</p>
            <p><span className="props">Release Date:</span> {props.movieData.release_date}</p>
            <p><span className="props">Vote Average:</span> {props.movieData.vote_average}</p>
            <p><span className="props">Vote Count:</span> {props.movieData.vote_count}</p>
        </div>
    </div>
    )}

export default Movie