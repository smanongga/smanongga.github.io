
exports.up = function(knex, Promise) {
  return knex.schema.createTable('taxonomy', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.text('description', 'mediumtext')
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('taxonomy')
};
