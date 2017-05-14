
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pages', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.text('body', 'longtext')
    table.string('status')
    table.dateTime('published_date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pages')
};
