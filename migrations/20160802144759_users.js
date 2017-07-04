exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.integer('profile_id').unsigned()
    table.foreign('profile_id').references('profile.id')
    table.string('password')
    table.string('name')
    table.string('email')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
