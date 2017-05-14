
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('taxonomy').del()
    .then(function () {
      // Inserts seed entries
      return knex('taxonomy').insert([
        {id: 1, title: 'Technical Blog', description: ''},
        {id: 2, title: 'Cultural Blog', description: ''}
      ]);
    });
};
