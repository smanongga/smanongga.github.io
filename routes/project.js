//  PROJECT ROUTERS
var express = require('express')
var dateFormat = require('dateformat')
var router = express.Router()
var db = require('../db')

// Add project router
router.get('/add', function (req, res) {
  res.render('addProject')
})

router.post('/add', function (req, res) {
  const title = req.params.title
  const description = req.params.title
  const goals = req.params.goals
  const requirements = req.params.requirements
  const outcome = req.params.outcome
  const author = req.params.typeahead
  const status = req.params.status
  const today = new Date()
  const date = dateFormat(today, 'yyyy-mm-dd 08:00:00')

  db.addProjectPost(title, description, goals, requirements, outcome, author, date, status, req.app.get('connection'))
  .then(results => {
    res.redirect(`/${results[0].id}`)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// Get project router
router.get('/:id', function (req, res) {
  const projectSlug = req.params.id

  db.getProjectPost(projectSlug, req.app.get('connection'))
  .then((result) => {
    res.render('projectPost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
