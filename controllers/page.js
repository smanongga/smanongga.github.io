//  PAGE Controller
var dateFormat = require('dateformat')
var db = require('../db')

exports.add = function (req, res) {
  const title = req.body.title
  const body = req.body.body
  const author = req.body.typeahead
  const today = new Date()
  const date = dateFormat(today, 'YYYY-MM-DD HH:MM:SS')
  const status = req.body.status

  db.addPagePost(title, body, author, date, status, req.app.get('connection'))
  .then(results => {
    res.redirect(`/${results[0].id}`)
  })
}

exports.project_detail = function (req, res) {
  const pageSlug = req.params.id
  db.getPagePost(pageSlug, req.app.get('connection'))
  .then((result) => {
    console.log
    res.render('pagePost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
