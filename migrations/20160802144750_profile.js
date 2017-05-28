
exports.up = function (knex, Promise) {
  return knex.schema.createTable('profile', function (table) {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profile')
}
