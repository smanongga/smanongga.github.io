
exports.up = function(knex, Promise) {
  return knex.schema.createTable('taxonomy_vocabulary', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.text('description', 'mediumtext')
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('taxonomy')
};
