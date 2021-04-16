exports.up = (knex) => {
  return knex.schema.createTable('matrixFilms', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.integer('likes')
    table.integer('dislikes')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('matrixFilms')
}
