// Bulk Operation
exports.updateOperation = (id, actionType, contentType, connection) => {
  return connection(contentType)
  .where(`${contentType}.id`, '=', id)
  .update(`${contentType}.status`, actionType)
  .then((result) => {
    return connection(contentType)
    .select()
  })
}

exports.deleteOperation = (id, contentType, connection) => {
  return connection(contentType)
  .where(`${contentType}.id`, '=', id)
  .delete()
  .then((result) => {
    return connection(contentType)
    .select()
  })
}

// ADMIN SECTION SQL

// Manage Content - URL - /admin/contenttype/content
exports.getAdminContent = (contentType, connection) => {
  return connection(contentType)
  .join('users', 'users.id', `${contentType}.author`)
  .select(`${contentType}.id as contentId`, 'title', 'status', 'type', 'published_date', 'users.name as name', 'slug')
  .orderByRaw(`${contentType}.id DESC`)
}

// Manage Taxonomy & Tags - URL - /admin/taxonomies
exports.getTaxonomy = (connection) => {
  return connection('taxonomy_vocabulary')
  .select()
  .orderByRaw(`${taxonomy_vocabulary}.name DESC`)
}
// Manage Menu Structure - URL - /admin/menus

// Manage Users - URL - /admin/users

// TAXONOMY SQL
