exports.up = function (knex, Promise) {
  return knex.schema.createTable('taxonomy_blog', function (table) {
    table.increments('id').primary()
    table.integer('blog_id').unsigned()
    table.foreign('blog_id').references('blog.id')
    table.integer('term_id').unsigned()
    table.foreign('term_id').references('taxonomy_term_data.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('taxonomy_blog')
}
