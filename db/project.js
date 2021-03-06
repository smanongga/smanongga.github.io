// PROJECTS CONTENT TYPE SQL

// Add Project
exports.addProjectPost = (project, connection) => {
  return connection('users')
  .where('name', '=', project.author)
  .then((result) => {
    const authorId = result[0].id
    return connection('projects')
    .insert({
      'title': project.title,
      'description': project.description,
      'goals': project.goals,
      'requirements': project.requirements,
      'outcome': project.outcome,
      'status': project.status,
      'published_date': project.date,
      'type': 'projects',
      'author': authorId })
    .then((result) => {
      const id = result
      return connection('projects')
      .where('id', id)
      .select()
    })
  })
}

// Get Project
exports.getProjectPost = (projectSlug, connection) => {
  return connection('projects')
  .join('users', 'users.id', 'projects.author')
  .select()
  .where('projects.slug', projectSlug)
}

// Edit Project
exports.editProjectPost = (id, connection) => {
  return connection('projects')
  .where('id', id)
  .update()
  .then((result) => {
    const id = result
    return connection('projects')
    .where('id', id)
    .select()
  })
}
