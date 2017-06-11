// BLOG SQL

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
// Add Blog
exports.addBlogPost = (blog, connection) => {
  return connection('users')
  .where('name', '=', blog.author)
  .then((result) => {
    const authorId = result[0].id
    return connection('blogs')
    .insert({
      'title': blog.title,
      'body': blog.body,
      'author': authorId,
      'summary': blog.summary,
      'image': blog.image,
      'status': blog.status,
      'published_date': blog.date,
      'tags': blog.tags,
      'type': 'blog',
      'slug': blog.slug})
  })
  .then((result) => {
    const id = result
    return connection('blogs')
    .where('id', id)
    .select()
  })
}

// Get Blog
exports.getBlogPost = (blogSlug, connection) => {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'blogs.tags')
  .join('profile', 'profile.id', 'users.profile_id')
  .where('blogs.slug', blogSlug)
  .select(
    'blogs.title',
    'blogs.body',
    'blogs.summary',
    'blogs.published_date',
    'blogs.image',
    'blogs.status',
    'profile.first_name',
    'profile.last_name',
    'profile.id as profile_id',
    'taxonomy_vocabulary.title as tags',
    'blogs.image',
    'users.name as author')
}

// Delete Blog
exports.deleteBlogPost = (blogSlug, connection) => {
  return connection('blogs')
  .where('blogs.slug', blogSlug)
  .delete()
}
