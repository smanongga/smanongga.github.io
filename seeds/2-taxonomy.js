
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('taxonomy_vocabulary').del()
    .then(function () {
      // Inserts seed entries
      return knex('taxonomy_vocabulary').insert([
        {id: 1, title: 'Technical Blog', description: ''},
        {id: 2, title: 'Cultural Blog', description: ''},
        {id: 3, title: 'Drupal', description: ''}
      ])
    })
}
