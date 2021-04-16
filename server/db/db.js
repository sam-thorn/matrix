const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovies,
  getSynopsis,
  addLikes,
  addDislikes
}

function getMovies (db = connection) {
  return db('matrixFilms').select()
}

function getSynopsis (db = connection) {
  return db
}

function addLikes (db = connection) {
return db('matrixFlilms')
.where(id, id)
.update({ likes: movie.likes })
}

function addDislikes (db = connection) {
  return db('matrixFlilms')

}
