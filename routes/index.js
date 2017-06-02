var express = require('express')
var dateFormat = require('dateformat')
var router = express.Router()
var multer = require('multer')

var db = require('../db')

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './public/images/blog')
  },
  filename: function (request, file, callback) {
    callback(null, file.originalname)
  }
})
var upload = multer({storage: storage})

// ADMIN SECTION

router.get('/admin/:id/content', function (req, res) {
  const contentType = req.params.id
  db.getAdminContent(contentType, req.app.get('connection'))
  .then((results) => {
    const viewData = {
      content: results,
      siteTitle: contentType
    }
    res.render('adminContent', viewData)
  })
})

router.post('/admin/:id/content', function (req, res) {
  const contentType = req.params.id
  const contentId = req.body.contentId
  console.log(contentId)
  db.bulkOperation(contentType, contentId, req.app.get('connection'))
  .then((results) => {
    res.redirect('/admin/results[0].type/' + 'content')
  })
})

// SITE STRUCTURE

// Frontpage - URL - /
router.get('/', function (req, res) {
  db.getRecentBlogs(req.app.get('connection'))
  .then((results) => {
    const viewData = {
      siteTitle: 'S.Manongga',
      blog: results
    }
    res.render('index', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// Blog section - URL - /blog
router.get('/blog', function (req, res) {
  db.getOldBlogs(req.app.get('connection'))
  .then(results => {
    const viewData = {
      siteTitle: 'S.Manongga',
      blog: results
    }
    res.render('blogList', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// Projects section - URL - /projects
router.get('/projects', function (req, res) {
  db.getProjects(req.app.get('connection'))
  .then(results => {
    const viewData = {
      siteTitle: 'S.Manongga',
      project: results
    }
    res.render('projectList', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// BLOG ROUTER

// Add blog router
router.get('/blog/add', function (req, res) {
  res.render('addBlog')
})

router.post('/blog/add', upload.single('image'), function (req, res) {
  const title = req.body.title
  const slug = req.body.title.replace(/[^\w,'-]/g, '-').toLowerCase()
  const body = req.body.body
  const author = req.body.typeahead
  const summary = req.body.summary
  const status = req.body.status
  const tags = req.body.tags
  const today = new Date()
  const date = dateFormat(today, 'yyyy-mm-dd 08:00:00')
  const image = req.file.path.replace('public', '')

  db.addBlogPost(title, slug, body, author, summary, image, status, date, tags, req.app.get('connection'))
  .then(results => {
    res.redirect(`/blog/${results[0].slug}`)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// Get blog router
router.get('/blog/:id', function (req, res) {
  var blogSlug = req.params.id
  db.getBlogPost(blogSlug, req.app.get('connection'))
  .then((result) => {
    res.render('blogPost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// Edit blog router
router.get('/blog/:id/edit', function (req, res) {
  const id = req.params.id
  db.getBlogPost(id, req.app.get('connection'))
  .then((result) => {
    res.render('addBlog', result[0])
  })
})

// Delete blog router
router.get('/blog/:id/delete', function (req, res) {
  const blogSlug = req.params.id
  db.deleteBlogPost(blogSlug, req.app.get('connection'))
  .then((result) => {
    res.redirect('/')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

//  PAGE ROUTERS

// Add page router
router.get('/page/add', function (req, res) {
  res.render('addPage')
})

router.post('page/submit', function (req, res) {
  const title = req.body.title
  const body = req.body.body
  const author = req.body.typeahead
  const today = new Date()
  const date = dateFormat(today, 'YYYY-MM-DD HH:MM:SS')
  const status = req.body.status

  db.addPagePost(title, body, author, date, status, req.app.get('connection'))
  .then(results => {
    res.redirect(`/page/${results[0].id}`)
  })
})

// Get page router
router.get('/page/:id', function (req, res) {
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

//  PROJECT ROUTERS

// Add project router
router.get('/project/add', function (req, res) {
  res.render('addProject')
})

router.post('/project/add', function (req, res) {
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
    res.redirect(`/page/${results[0].id}`)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// Get project router
router.get('/project/:id', function (req, res) {
  const projectSlug = req.params.id

  db.getProjectPost(projectSlug, req.app.get('connection'))
  .then((result) => {
    res.render('projectPost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

//  HELPER ROUTER
router.get('/search', function (req, res) {
  var author = req.query.key
  db.getAuthor(author, req.app.get('connection'))
  .then(function (results) {
    var data = []
    for (prop in results) {
      data.push(results[prop].name)
    }
    res.end(JSON.stringify(data))
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
