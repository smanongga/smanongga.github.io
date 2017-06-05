//  PROJECT Controller
var dateFormat = require('dateformat')
var db = require('../db')

function slugify (text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '')          // Trim - from end of text
}

// Add Project
exports.add = function (req, res) {
  const project = {
    title: req.body.title,
    slug: slugify(req.body.title),
    author: req.body.author,
    description: req.body.description,
    goals: req.body.goals,
    outcome: req.body.outcome,
    status: req.body.status,
    date: dateFormat(req.body.publishedDate, 'yyyy-mm-dd 08:00:00')
  }

  // Form validation
  req.checkBody('title', 'Title is required').notEmpty()
  req.checkBody('author', 'Author is required').notEmpty()
  req.checkBody('publishedDate', 'Published date is required').notEmpty()
  req.checkBody('status', 'Status is required').notEmpty()

   // Data sanitization
  req.sanitize('description').escape()
  req.sanitize('goals').escape()
  req.sanitize('outcome').escape()

  const errors = req.validationErrors()

  if (errors) {
  // Show error to user
    res.render('addProject', {title: 'Create Project', project: project, errors: errors})
    return
  } else {
  // Data from form is valid
    db.addProjectPost(project, req.app.get('connection'))
    .then(results => {
      res.redirect(`/project/${results[0].slug}`)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  }
}

// View Project Detail
exports.project_detail = function (req, res) {
  const projectSlug = req.params.id

  db.getProjectPost(projectSlug, req.app.get('connection'))
  .then((result) => {
    res.render('projectPost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.project_edit = function (req, res) {
  const projectSlug = req.params.id

  db.getProjectPost(projectSlug, req.app.get('connection'))
  .then((result) => {
    res.render('addBlog', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
