//  PAGE ROUTERS
var express = require('express')
var dateFormat = require('dateformat')
var router = express.Router()
var db = require('../db')

// Add page router
router.get('/add', function (req, res) {
  res.render('addPage')
})

router.post('/submit', function (req, res) {
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
})

// Get page router
router.get('/:id', function (req, res) {
  const pageSlug = req.params.id
  db.getPagePost(pageSlug, req.app.get('connection'))
  .then((result) => {
    console.log
    res.render('pagePost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
