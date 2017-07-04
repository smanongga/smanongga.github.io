
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('taxonomy_blog').del()
    .then(function () {
      // Inserts seed entries
      return knex('taxonomy_blog').insert([
        {id: 1, blog_id: 1, term_id: 2},
        {id: 2, blog_id: 2, term_id: 2},
        {id: 3, blog_id: 3, term_id: 1},
        {id: 4, blog_id: 4, term_id: 1},
        {id: 5, blog_id: 5, term_id: 2},
        {id: 6, blog_id: 6, term_id: 1},
        {id: 7, blog_id: 7, term_id: 2},
        {id: 8, blog_id: 8, term_id: 1},
        {id: 9, blog_id: 9, term_id: 2},
        {id: 10, blog_id: 10, term_id: 1},
        {id: 11, blog_id: 11, term_id: 2},
        {id: 12, blog_id: 12, term_id: 1},
        {id: 13, blog_id: 13, term_id: 2},
        {id: 14, blog_id: 14, term_id: 2},
        {id: 15, blog_id: 15, term_id: 1},
        {id: 16, blog_id: 16, term_id: 2}
      ])
    })
}
