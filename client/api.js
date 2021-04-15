import request from 'superagent'

// EDIT THIS LINE
const movieUrl = '/api/v1/widgets/'

export function getMovies () {
  return request
    .get('https://api.themoviedb.org/3/movie/550?api_key=21404fdcc8723007e32347fcedff9bb4')
    .then(response => {
      return response.body
    })
}
