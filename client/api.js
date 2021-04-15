import request from 'superagent'

// EDIT THIS LINE
const movieUrl = '/api/v1/widgets/'

export function getMovies () {
  return request
    .get(movieUrl)
    .then(response => {
      return response.body
    })
}
