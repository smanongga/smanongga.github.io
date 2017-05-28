
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pages').del()
  .then(function () {
    // Inserts seed entries
    return knex('pages').insert([
      {id: 1,
        type: 'page',
        title: 'About Me',
        slug: 'about-me',
        body: '<p>My name is Sam Manongga. I’m a web developer who recently moved to Auckland, New Zealand. Before moving, I was was working for Western Academy of Beijing where I had the opportunity to grow my web development skills. Though most my coding and design skills are self taught, it didn’t hinder me from creating different type of applications during my ten year tenure.</p> <p> I believe that as programmer or life in general, you are never done learning so I’m currently enrolled at EDA for their 18 weeks programming bootcamp to become a full-stack developer.</p> <p>This space is my journey.</p>',
        status: 'Published',
        published_date: '2017-02-21 08:00:00',
        'author': 1}
    ])
  })
}
