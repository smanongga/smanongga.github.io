
exports.up = function (knex, Promise) {
  return knex.schema.createTable('blogs', function (table) {
    table.increments('id').primary()
    table.string('type')
    table.integer('tags').unsigned()
    table.foreign('tags').references('taxonomy_vocabulary.id')
    table.integer('author').unsigned()
    table.foreign('author').references('users.id')
    table.string('title')
    table.string('slug').unique()
    table.text('body', 'longtext')
    table.text('summary', 'mediumtext')
    table.string('image')
    table.string('status')
    table.dateTime('published_date')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('blogs')
}
