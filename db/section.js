// Get recent blog post - URL - frontpage
function getRecentBlogs (connection) {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
  .join('taxonomy_blog', 'blog_id', 'blogs.id')
  .join('taxonomy_term_data', 'taxonomy_term_data.id', 'term_id')
  .join('profile', 'profile.id', 'users.profile_id')
  .select('blogs.title', 'blogs.slug', 'blogs.summary', 'blogs.published_date', 'blogs.image', 'profile.first_name', 'profile.last_name', 'profile.id as profile_id', 'taxonomy_term_data.title as tags')
  .orderByRaw('blogs.id DESC').limit(3)
  .where('blogs.status', 'Published')
}

// Get recent Project - URL - frontpage
function getRecentProject (connection) {
  return connection('projects')
  .select('title', 'description', 'image', 'slug')
  .orderByRaw('id DESC').limit(1)
}

exports.getFrontpageContent = (connection) => {
  return Promise.all([
    getRecentProject(connection),
    getRecentBlogs(connection)
  ])
  .then(([project, blogs]) => {
    const data = {
      siteTitle: 'S.Manongga',
      project: project,
      blogs: blogs
    }
    return data
  })
    .catch((err) => {
      console.log(err)
    })
}
