const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovies
}

function getMovies (db = connection) {
  return db('matrixFilms').select()
}
