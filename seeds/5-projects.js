
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1,
          type: 'project',
          title: 'APAC Tournament Website',
          slug: 'apac-tournament-website',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et ligula lobortis, elementum lectus volutpat, aliquet felis. Nam at tellus sed sem ultrices condimentum. Aenean magna ligula, euismod quis vulputate quis, sollicitudin ac diam. Cras posuere massa iaculis lorem cursus feugiat. Vivamus molestie nisl id libero mattis, egestas commodo nunc imperdiet. Praesent aliquet bibendum diam, vitae suscipit tortor ultricies ut. Suspendisse porttitor sollicitudin lorem, id varius libero. Praesent elementum interdum purus, ornare rhoncus sem posuere ac. Aliquam imperdiet diam a egestas ultricies.',
          goals: 'Donec posuere ante id sapien euismod venenatis. Vivamus nec orci sit amet purus aliquam elementum non eu mauris. Etiam ornare, nulla nec dapibus facilisis, dui tellus condimentum nisi, sit amet rutrum libero sapien nec sapien. Praesent aliquet, urna vel laoreet hendrerit, libero dolor lobortis velit, vitae laoreet est mauris imperdiet dolor.',
          requirements: '',
          outcome: 'Proin volutpat non diam vitae suscipit. Mauris et feugiat nisl. Praesent ipsum odio, luctus ac turpis id, tristique lacinia mauris. Nulla enim velit, varius non dolor efficitur, lacinia ultricies dolor. Sed accumsan pellentesque diam id aliquam. Cras laoreet, ipsum vel commodo suscipit, eros tellus sollicitudin velit, a vehicula sapien urna a sem. Integer laoreet elementum erat. Suspendisse molestie, tortor vitae consectetur ultrices, neque turpis molestie ante, in molestie nunc ipsum at massa. Phasellus non vulputate ex, sit amet interdum ligula. In hac habitasse platea dictumst. Nulla nec sem ornare, tempor leo nec, imperdiet nisi. Ut eleifend fermentum libero sed hendrerit. Phasellus consequat tristique leo, sit amet aliquet dui fringilla at. Nunc lacinia vestibulum dui, ac faucibus purus placerat ut. Mauris suscipit eros quis viverra semper. Quisque aliquam diam et mauris cursus sollicitudin.',
          status: 'Unpublished',
          published_date: '2017-02-21 08:00:00',
          'author': 1
        },
        {id: 2,
          type: 'project',
          title: 'Online Recruitment',
          slug: 'online-recruitment',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et ligula lobortis, elementum lectus volutpat, aliquet felis. Nam at tellus sed sem ultrices condimentum. Aenean magna ligula, euismod quis vulputate quis, sollicitudin ac diam. Cras posuere massa iaculis lorem cursus feugiat. Vivamus molestie nisl id libero mattis, egestas commodo nunc imperdiet. Praesent aliquet bibendum diam, vitae suscipit tortor ultricies ut. Suspendisse porttitor sollicitudin lorem, id varius libero. Praesent elementum interdum purus, ornare rhoncus sem posuere ac. Aliquam imperdiet diam a egestas ultricies.',
          goals: 'Donec posuere ante id sapien euismod venenatis. Vivamus nec orci sit amet purus aliquam elementum non eu mauris. Etiam ornare, nulla nec dapibus facilisis, dui tellus condimentum nisi, sit amet rutrum libero sapien nec sapien. Praesent aliquet, urna vel laoreet hendrerit, libero dolor lobortis velit, vitae laoreet est mauris imperdiet dolor.',
          requirements: '',
          outcome: 'Proin volutpat non diam vitae suscipit. Mauris et feugiat nisl. Praesent ipsum odio, luctus ac turpis id, tristique lacinia mauris. Nulla enim velit, varius non dolor efficitur, lacinia ultricies dolor. Sed accumsan pellentesque diam id aliquam. Cras laoreet, ipsum vel commodo suscipit, eros tellus sollicitudin velit, a vehicula sapien urna a sem. Integer laoreet elementum erat. Suspendisse molestie, tortor vitae consectetur ultrices, neque turpis molestie ante, in molestie nunc ipsum at massa. Phasellus non vulputate ex, sit amet interdum ligula. In hac habitasse platea dictumst. Nulla nec sem ornare, tempor leo nec, imperdiet nisi. Ut eleifend fermentum libero sed hendrerit. Phasellus consequat tristique leo, sit amet aliquet dui fringilla at. Nunc lacinia vestibulum dui, ac faucibus purus placerat ut. Mauris suscipit eros quis viverra semper. Quisque aliquam diam et mauris cursus sollicitudin.',
          status: 'Unpublished',
          published_date: '2017-02-21 08:00:00',
          'author': 1
        },
        {id: 3,
          type: 'project',
          title: 'Online Admissions',
          slug: 'online-admissions',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et ligula lobortis, elementum lectus volutpat, aliquet felis. Nam at tellus sed sem ultrices condimentum. Aenean magna ligula, euismod quis vulputate quis, sollicitudin ac diam. Cras posuere massa iaculis lorem cursus feugiat. Vivamus molestie nisl id libero mattis, egestas commodo nunc imperdiet. Praesent aliquet bibendum diam, vitae suscipit tortor ultricies ut. Suspendisse porttitor sollicitudin lorem, id varius libero. Praesent elementum interdum purus, ornare rhoncus sem posuere ac. Aliquam imperdiet diam a egestas ultricies.',
          goals: 'Donec posuere ante id sapien euismod venenatis. Vivamus nec orci sit amet purus aliquam elementum non eu mauris. Etiam ornare, nulla nec dapibus facilisis, dui tellus condimentum nisi, sit amet rutrum libero sapien nec sapien. Praesent aliquet, urna vel laoreet hendrerit, libero dolor lobortis velit, vitae laoreet est mauris imperdiet dolor.',
          requirements: '',
          outcome: 'Proin volutpat non diam vitae suscipit. Mauris et feugiat nisl. Praesent ipsum odio, luctus ac turpis id, tristique lacinia mauris. Nulla enim velit, varius non dolor efficitur, lacinia ultricies dolor. Sed accumsan pellentesque diam id aliquam. Cras laoreet, ipsum vel commodo suscipit, eros tellus sollicitudin velit, a vehicula sapien urna a sem. Integer laoreet elementum erat. Suspendisse molestie, tortor vitae consectetur ultrices, neque turpis molestie ante, in molestie nunc ipsum at massa. Phasellus non vulputate ex, sit amet interdum ligula. In hac habitasse platea dictumst. Nulla nec sem ornare, tempor leo nec, imperdiet nisi. Ut eleifend fermentum libero sed hendrerit. Phasellus consequat tristique leo, sit amet aliquet dui fringilla at. Nunc lacinia vestibulum dui, ac faucibus purus placerat ut. Mauris suscipit eros quis viverra semper. Quisque aliquam diam et mauris cursus sollicitudin.',
          status: 'Unpublished',
          published_date: '2017-02-21 08:00:00',
          'author': 1
        },
        {id: 4,
          type: 'project',
          title: 'SkillHub',
          slug: 'skillhub',
          description: 'Created in Auckland, New Zealand, SkillHub is a community for people to share, discover and develop skills together. SkillHub was built by EDA students in June 2017',
          goals: 'Donec posuere ante id sapien euismod venenatis. Vivamus nec orci sit amet purus aliquam elementum non eu mauris. Etiam ornare, nulla nec dapibus facilisis, dui tellus condimentum nisi, sit amet rutrum libero sapien nec sapien. Praesent aliquet, urna vel laoreet hendrerit, libero dolor lobortis velit, vitae laoreet est mauris imperdiet dolor.',
          requirements: '',
          outcome: 'Proin volutpat non diam vitae suscipit. Mauris et feugiat nisl. Praesent ipsum odio, luctus ac turpis id, tristique lacinia mauris. Nulla enim velit, varius non dolor efficitur, lacinia ultricies dolor. Sed accumsan pellentesque diam id aliquam. Cras laoreet, ipsum vel commodo suscipit, eros tellus sollicitudin velit, a vehicula sapien urna a sem. Integer laoreet elementum erat. Suspendisse molestie, tortor vitae consectetur ultrices, neque turpis molestie ante, in molestie nunc ipsum at massa. Phasellus non vulputate ex, sit amet interdum ligula. In hac habitasse platea dictumst. Nulla nec sem ornare, tempor leo nec, imperdiet nisi. Ut eleifend fermentum libero sed hendrerit. Phasellus consequat tristique leo, sit amet aliquet dui fringilla at. Nunc lacinia vestibulum dui, ac faucibus purus placerat ut. Mauris suscipit eros quis viverra semper. Quisque aliquam diam et mauris cursus sollicitudin.',
          status: 'Unpublished',
          published_date: '2017-02-21 08:00:00',
          'image': '/images/project/skillhub.jpg',
          'author': 1
        }
      ])
    })
}
