// PAGE CONTENT TYPE SQL

// Add Page
exports.addPagePost = (page, connection) => {
  console.log(page)
  return connection('users')
  .where('name', '=', page.author)
  .then((result) => {
    const authorId = result[0].id
    return connection('pages')
    .insert({
      'author': authorId,
      'title': page.title,
      'slug': page.slug,
      'body': page.body,
      'status': page.status,
      'published_date': page.date,
      'type': 'pages'})
  })
  .then((result) => {
    const id = result
    return connection('pages')
    .where('id', id)
    .select()
  })
}

// Get Page
exports.getPagePost = (pageSlug, connection) => {
  return connection('pages')
  .join('users', 'users.id', 'pages.author')
  .join('profile', 'profile.id', 'users.profile_id')
  .where('pages.slug', pageSlug)
  .select(
    'pages.title',
    'pages.body',
    'pages.published_date',
    'pages.status',
    'profile.first_name',
    'profile.last_name',
    'profile.id as profile_id',
    'pages.slug')
}

// Edit Page
exports.editPagePost = (id, connection) => {
  return connection('pages')
  .where('pages.id', id)
  .update()
  .then((result) => {
    const id = result
    return connection('pages')
    .where('id', id)
    .select()
  })
}
