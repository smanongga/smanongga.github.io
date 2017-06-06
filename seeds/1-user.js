
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, profile_id: 1, name: 'smanongga', password: '7110EDA4D09E062AA5E4A390B0A572AC0D2C0220', email: 'smanongga@example.org'}
      ])
    })
}
