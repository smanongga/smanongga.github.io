
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {id: 1, first_name: 'Sam', last_name: 'Manongga', image: ''}
      ])
    })
}
