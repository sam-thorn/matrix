import request from 'superagent'

const movieUrl = 'https://api.themoviedb.org/3/movie/550?api_key=21404fdcc8723007e32347fcedff9bb4'

export function getMovies () {
  return request
    .get(movieUrl)
    .then(response => {
      return response.body
    })
}
