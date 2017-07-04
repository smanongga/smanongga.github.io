
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('taxonomy_project').del()
    .then(function () {
      // Inserts seed entries
      return knex('taxonomy_project').insert([
        {id: 1, project_id: 1, term_id: 3},
        {id: 2, project_id: 2, term_id: 3},
        {id: 3, project_id: 3, term_id: 3}
      ])
    })
}
