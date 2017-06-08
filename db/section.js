// SITE STRUCTURE SQL

// Get recent blog post - URL - frontpage
exports.getRecentBlogs = (connection) => {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'blogs.tags')
  .join('profile', 'profile.id', 'users.profile_id')
  .select(
    'blogs.title',
    'blogs.slug',
    'blogs.summary',
    'blogs.published_date',
    'blogs.image',
    'profile.first_name',
    'profile.last_name',
    'profile.id as profile_id',
    'taxonomy_vocabulary.title as tags')
  .orderByRaw('blogs.id DESC').limit(4)
  .where('blogs.status', 'Published')
}

// Get old blog post - URL - /blog
exports.getOldBlogs = (connection) => {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'blogs.tags')
  .join('profile', 'profile.id', 'users.profile_id')
  .select(
    'blogs.title',
    'blogs.slug',
    'blogs.summary',
    'blogs.published_date',
    'blogs.image',
    'profile.first_name',
    'profile.last_name',
    'profile.id as profile_id',
    'taxonomy_vocabulary.title as tags')
  .orderByRaw('blogs.id DESC').offset(4)
  .where('blogs.status', 'Published')
}

// Get list of project - URL - /projects
exports.getProjects = (connection) => {
  return connection('projects')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'projects.tags')
  .select(
    'projects.title as projectTitle',
    'projects.description as projectDescription',
    'goals',
    'requirements',
    'outcome',
    'status',
    'published_date')
  .orderByRaw('projects.id DESC')
}
// Fetch
exports.getAuthor = (author, connection) => {
  return connection('users')
  .where('users.name', 'like', `%${author}%`)
  .select('users.name')
}
