//  PAGE Controller
var dateFormat = require('dateformat')
var db = require('../db/page')

function slugify (text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '')          // Trim - from end of text
}

exports.add = (req, res) => {
  const page = {
    title: req.body.title,
    slug: slugify(req.body.title),
    body: req.body.body,
    author: req.body.typeahead,
    date: dateFormat(req.body.publishedDate, 'yyyy-mm-dd 08:00:00'),
    status: req.body.status
  }

  // Form validation
  req.checkBody('title', 'Title is required').notEmpty()
  req.checkBody('typeahead', 'Author is required').notEmpty()
  req.checkBody('publishedDate', 'Published date is required').notEmpty()
  req.checkBody('status', 'Status is required').notEmpty()

   // Data sanitization
  req.sanitize('body').escape()

  const errors = req.validationErrors()
  if (errors) {
  // Show error to user
    res.render('addPage', {title: 'Create Page', project: page, errors: errors})
    return
  } else {
  // Data from form is valid
    db.addPagePost(page, req.app.get('connection'))
    .then(results => {
      res.redirect(`/page/${results[0].slug}`)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  }
}

exports.page_detail = (req, res) => {
  const pageSlug = req.params.id
  db.getPagePost(pageSlug, req.app.get('connection'))
  .then((result) => {
    res.render('viewPage', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.page_edit = (req, res) => {
  const id = req.params.id
  db.getPagePost(id, req.app.get('connection'))
  .then((result) => {
    res.render('addPage', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
