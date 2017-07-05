module.exports = {
  getAllBlogs
}

function getAllBlogs (connection) {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
 .join('taxonomy_blog', 'blog_id', 'blogs.id')
 .join('taxonomy_term_data', 'taxonomy_term_data.id', 'term_id')
 .join('profile', 'profile.id', 'users.profile_id')
 .select('blogs.title', 'blogs.slug', 'blogs.summary', 'blogs.published_date', 'blogs.image', 'profile.first_name', 'profile.last_name', 'profile.id as profile_id', 'taxonomy_term_data.title as tags')
 .orderByRaw('blogs.id DESC').offset(4)
 .where('blogs.status', 'Published')
}
