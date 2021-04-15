import React from "react";
import Movie from "./Movie";

function Matrix() {
  return (
    <div className='page-matrix'>
      <h1 className="title">Welcome to the Matrix</h1>
        <div className="container">
          <div className="poster-1"></div>
          <div className="poster-2"></div>
        </div>
        <div className="container-2">
          <div className="poster-3"></div>
          <div className="poster-4"></div>
        </div>
          
      {/* MatrixMovies => MatrixMovies.map(movie => <Movie movie={ } />) */}{" "}
    </div>
  );
}

export default Matrix;
