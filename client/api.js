import request from 'superagent'

const movieUrl = 'api/v1/movies/'

export function getMovies () {
  return request
    .get(movieUrl)
    .then(response => {
      return response.body
    })
}
