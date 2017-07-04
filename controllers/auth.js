const authHelpers = require('./auth/helpers')
const passport = require('./auth/local')

exports.register = (req, res, next) => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    passport.authenticate('local', (err, user, info) => {
      if (user) { handleResponse(res, 200, 'success') }
    })(req, res, next)
  })
  .catch((err) => { handleResponse(res, 500, 'error') })
}

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { handleResponse(res, 500, 'error') }
    if (!user) { handleResponse(res, 404, 'User not found') }
    if (user) {
      req.logIn(user, function (err) {
        if (err) { handleResponse(res, 500, 'error') }
        handleResponse(res, 200, 'success')
      })
    }
  })(req, res, next)
}

exports.logout = (req, res, next) => {
  req.logout()
  handleResponse(res, 200, 'success')
}

// *** helpers *** //

function handleLogin (req, user) {
  return new Promise((resolve, reject) => {
    req.login(user, (err) => {
      if (err) reject(err)
      resolve()
    })
  })
}

function handleResponse (res, code, statusMsg) {
  res.status(code).json({status: statusMsg})
}
