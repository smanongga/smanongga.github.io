
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('taxonomy_term_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('taxonomy_term_data').insert([
        {id: 1, title: 'Technical', id_vocabulary: 2, description: ''},
        {id: 2, title: 'Cultural', id_vocabulary: 2, description: ''},
        {id: 3, title: 'Drupal', id_vocabulary: 1, description: ''}
      ])
    })
}
