
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id').primary()
    table.integer('tags').unsigned()
    table.foreign('tags').references('taxonomy_vocabulary.id')
    table.string('title')
    table.text('description', 'longtext')
    table.text('goals', 'longtext')
    table.text('requirements', 'longtext')
    table.text('outcome', 'longtext')
    table.string('status')
    table.dateTime('published_date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
