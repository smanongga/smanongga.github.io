exports.up = function (knex, Promise) {
  return knex.schema.createTable('taxonomy_project', function (table) {
    table.increments('id').primary()
    table.integer('project_id').unsigned()
    table.foreign('project_id').references('projects.id')
    table.integer('term_id').unsigned()
    table.foreign('term_id').references('taxonomy_term_data.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('taxonomy_project')
}
