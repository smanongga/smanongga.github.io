
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function (table) {
  table.increments('id').primary()
  table.integer('tags').unsigned()
  table.foreign('tags').references('taxonomy.id')
  table.integer('author').unsigned()
  table.foreign('author').references('users.id')
  table.string('title')
  table.text('body', 'longtext')
  table.text('summary', 'mediumtext')
  table.string('image')
  table.string('status')
  table.dateTime('published_date')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs')
};
