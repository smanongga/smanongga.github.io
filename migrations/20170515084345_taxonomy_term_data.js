
exports.up = function (knex, Promise) {
  return knex.schema.createTable('taxonomy_term_data', function (table) {
    table.increments('id').primary()
    table.integer('id_vocabulary').unsigned()
    table.foreign('id_vocabulary').references('taxonomy_vocabulary.id')
    table.string('title')
    table.text('description', 'mediumtext')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('taxonomy_term_data')
}
