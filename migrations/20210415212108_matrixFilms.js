exports.up = (knex) => {
  return knex.schema.createTable('matrixFilms', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('genre')
    table.integer('release_year')
    table.string('director')
    table.string('runtime')
    table.text('short_summary')
    table.text('long_summary')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('matrixFilms')
}
