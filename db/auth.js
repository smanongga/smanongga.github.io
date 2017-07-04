exports.insertUser = (username, email, password, connection) => {
  return connection('users')
  .insert()
  .then((result) => {
    return connection('users')
    .select()
  })
}

exports.checkUser = (username, connection) => {
  return connection('users')
  .where('users.admin', '=', true)
}

exports.getUser = (id, connection) => {
  return connection('users')
  .where('user.id', '=', id)
  .select()
}
