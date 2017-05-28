module.exports = {
  getRecentBlogs: getRecentBlogs,
  getOldBlogs: getOldBlogs
}

// ADMIN SECTION SQL

// Manage Content URL - /admin/contenttype/contenttype

// Manage Taxonomy & Tags - URL - /admin/taxonomies

// Manage Menu Structure - URL - /admin/menus

// Manage Users - URL - /admin/users

// SITE STRUCTURE SQL

// Get recent blog post - URL - frontpage
function getRecentBlogs (connection) {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'blogs.tags')
  .join('profile', 'profile.id', 'users.profile_id')
  .select('blogs.title', 'blogs.slug', 'blogs.summary', 'blogs.published_date', 'blogs.image', 'profile.first_name', 'profile.last_name', 'profile.id as profile_id', 'taxonomy_vocabulary.title as tags')
  .orderByRaw('blogs.id DESC').limit(5)
}

// Get old blog post - URL - /blog
function getOldBlogs (connection) {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'blogs.tags')
  .join('profile', 'profile.id', 'users.profile_id')
  .select('blogs.title', 'blogs.slug', 'blogs.summary', 'blogs.published_date', 'blogs.image', 'profile.first_name', 'profile.last_name', 'profile.id as profile_id', 'taxonomy_vocabulary.title as tags')
  .orderByRaw('blogs.id DESC').offset(5)
}

// Get list of project - URL - /projects

// BLOG SQL

// Add Blog

// Get Blog

// Edit Blog

// PROJECTS CONTENT TYPE SQL

// Add Project

// Get Project

// Edit Project

// PAGE CONTENT TYPE SQL

// Add Page

// Get Page

// Edit Page

// TAXONOMY SQL

// PROFILE SQL

// MENU SQL

// HELPER SQL

// Fetch Profile -> User

// Fetch
