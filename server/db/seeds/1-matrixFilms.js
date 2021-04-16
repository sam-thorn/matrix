exports.seed = (knex) => {
  return knex('matrixFilms').insert([
    { id: 1, title: 'The Matrix', likes: 42069, dislikes: 3 },
    { id: 2, title: 'The Matrix Reloaded', likes: 9000, dislikes: 1111 },
    { id: 3, title: 'The Matrix Revolutions', likes: 3333, dislikes: 20201 },
    { id: 4, title: 'The Matrix Resurrection', likes: 0, dislikes: 0 }
  ])
}
