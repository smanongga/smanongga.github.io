module.exports = {
  getRecentBlogs: getRecentBlogs,
  getOldBlogs: getOldBlogs,
  getProjects: getProjects,
  addBlogPost: addBlogPost,
  getBlogPost: getBlogPost,
  editBlogPost: editBlogPost,
  addProjectPost: addProjectPost,
  getProjectPost: getProjectPost,
  editProjectPost: editProjectPost,
  getAuthor: getAuthor
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
function getProjects (connection) {
  return connection('projects')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'projects.tags')
  .select('projects.title as projectTitle', 'projects.description as projectDescription', 'goals', 'requirements', 'outcome', 'status', 'published_date')
  .orderByRaw('projects.id DESC')
}

// BLOG SQL

// Add Blog
function addBlogPost (title, slug, body, author, summary, image, status, date, tags, connection) {
  return connection('users')
  .where('name', '=', author)
  .then((result) => {
    const authorId = result[0].id
    return connection('blogs')
    .insert({'title': title, 'body': body, 'author': authorId, 'summary': summary, 'image': image, 'status': status, 'published_date': date, 'tags': tags, 'type': 'blog', 'slug': slug})
  })
  .then((result) => {
    const id = result
    return connection('blogs')
    .where('id', id)
    .select()
  })
}

// Get Blog
function getBlogPost (blogSlug, connection) {
  return connection('blogs')
  .join('users', 'users.id', 'blogs.author')
  .join('taxonomy_vocabulary', 'taxonomy_vocabulary.id', 'blogs.tags')
  .join('profile', 'profile.id', 'users.profile_id')
  .where('blogs.slug', '=', blogSlug)
  .select('blogs.title', 'blogs.body', 'blogs.summary', 'blogs.published_date', 'blogs.image', 'profile.first_name', 'profile.last_name', 'profile.id as profile_id', 'taxonomy_vocabulary.title as tags', 'blogs.image')
}

// Edit Blog
function editBlogPost (blogSlug, connection) {
  return connection('blogs')
  .where('blogs.slug', '=', blogSlug)
  .update()
  .then((result) => {
    const id = result
    return connection('pages')
    .where('id', id)
    .select()
  })
}

// PROJECTS CONTENT TYPE SQL

// Add Project
function addProjectPost (title, description, goals, requirements, outcome, author, status, date, connection) {
  return connection('users')
  .where('name', '=', author)
  .then((result) => {
    const authorId = result[0].id
    return connection('projects')
    .insert({ 'title': title, 'description': description, 'goals': goals, 'requirements': requirements, 'outcome': outcome, 'status': status, 'published_date': '2017-04-12 08:00:00', 'type': 'projects', 'author': authorId })
    .then((result) => {
      const id = result
      return connection('projects')
      .where('id', id)
      .select()
    })
  })
}
// Get Project
function getProjectPost (id, connection) {
  return connection('projects')
  .join('users', 'users.id', 'projects.author')
  .select()
  .where('id', id)
}

// Edit Project
function editProjectPost (id, connection) {
  return connection('projects')
  .where('id', id)
  .update()
  .then((result) => {
    const id = result
    return connection('pages')
    .where('id', id)
    .select()
  })
}
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
function getAuthor (author, connection) {
  return connection('users')
  .where('users.name', 'like', `%${author}%`)
  .select('users.name')
}
