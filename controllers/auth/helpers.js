const bcrypt = require('bcryptjs')
const db = require('../../db/auth')

exports.comparePass = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword)
}

exports.createUser = (req, res) => {
  return handleErrors(req)
  .then(() => {
    const salt = bcrypt.genSaltSync()
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt)
    }
    db.insertUsert(newUser, req.app.get('connection'))
    .returning('*')
    .catch((err) => {
      res.status(400).json({status: err.message})
    })
  })
}

exports.loginRequired = (req, res, next) => {
  if (!req.user) return res.status(401).json({status: 'Please log in'})
  return next()
}

exports.adminRequired = (req, res, next) => {
  if (!req.user) res.status(401).json({status: 'Please log in'})
  return knex('users')
  .where({username: req.user.username})
  .first()
  .then((user) => {
    if (!user.admin) res.status(401).json({status: 'You are not authorized'})
    return next()
  })
  .catch((err) => {
    res.status(500).json({status: 'Something bad happened'})
  })
}

exports.loginRedirect = (req, res, next) => {
  if (req.user) {
    return res.status(401).json({status: 'You are already logged in'})
  }
  return next()
}

function handleErrors (req) {
  return new Promise((resolve, reject) => {
    if (req.body.username.length < 6) {
      reject({
        message: 'Username must be longer than 6 characters'
      })
    } else if (req.body.password.length < 6) {
      reject({
        message: 'Password must be longer than 6 characters'
      })
    } else {
      resolve()
    }
  })
}
