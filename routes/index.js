var express = require('express')
var multer = require('multer')
var router = express.Router()
var multer = require('multer')
var dateFormat = require('dateformat')

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './public/images/blog')
  },
  filename: function (request, file, callback) {
    callback(null, file.originalname)
  }
})
var upload = multer({storage: storage})

// Require controller modules
var indexController = require('../controllers/index')
var adminController = require('../controllers/admin')
var blogController = require('../controllers/blog')
var projectController = require('../controllers/project')
var pageController = require('../controllers/page')
var taxonomyController = require('../controllers/taxonomy')

// SITE SECTION

// Frontpage - URL - /
router.get('/', indexController.index)
// Blog - URL - /blog
router.get('/blog', indexController.blog)
// Project - URL - /project
router.get('/project', indexController.project)
// Search - URL - /search
router.get('/search', indexController.search)

// ADMIN SECTION

// Manage Content
router.get('/admin/:id/content', adminController.index)
router.post('/admin/:id/content', adminController.bulk)

// Manage Taxonomy
router.get('/admin/taxonomy', adminController.taxonomy)

// Manage Menu

// TAXONOMY ROUTER - CRUD

// add taxonomy router - post
router.get('/taxonomy/add', function (req, res) {
  res.render('addTaxonomy', {title: 'Create Taxonomy'})
})
router.post('/taxonomy/add', taxonomyController.add)

<<<<<<< HEAD
// BLOG ROUTER - CRUD

// Add blog router - GET
router.get('/blog/add', function (req, res) {
  res.render('addBlog', {title: 'Create Blog'})
})
// Add blog router - POST
router.post('/blog/add', upload.single('image'), blogController.add)
// View blog router - GET
router.get('/blog/:id', blogController.blog_detail)
// Edit blog router - GET
router.get('/blog/:id/edit', blogController.blog_edit)

// PROJECT ROUTER - CRUD

// Add project router - GET
router.get('/project/add', function (req, res) {
  res.render('addProject', {title: 'Create Project'})
=======
var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './public/images/blog')
  },
  filename: function (request, file, callback) {
    callback(null, file.originalname)
  }
})
var upload = multer({storage: storage})

// SITE STRUCTURE

// Frontpage - URL - /
router.get('/', function (req, res) {
  db.getRecentBlogs(req.app.get('connection'))
  .then((results) => {
    const viewData = {
      blog: []
    }
    for (var i = 0; i < results.length; i++) {
      const blogEntry = {
        title: results[i].title,
        published_date: dateFormat(results[i].published_date, 'mmmm dd yyyy'),
        image: results[i].image,
        summary: results[i].summary,
        first_name: results[i].first_name,
        last_name: results[i].last_name,
        profile_id: results[i].profile_id,
        tags: results[i].tags,
        slug: results[i].slug}
      viewData.blog.push(blogEntry)
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
  .then((results) => {
    const viewData = {
      blog: []
    }
    for (var i = 0; i < results.length; i++) {
      const blogEntry = {
        title: results[i].title,
        published_date: dateFormat(results[i].published_date, 'mmmm dd yyyy'),
        image: results[i].image,
        summary: results[i].summary,
        first_name: results[i].first_name,
        last_name: results[i].last_name,
        profile_id: results[i].profile_id,
        tags: results[i].tags,
        slug: results[i].slug}
      viewData.blog.push(blogEntry)
    }
    res.render('index', viewData)
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
      project: results
    }
    res.render('projectPost', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
>>>>>>> f72de33d9fb6c7dba21bd4878d896496b51f9581
})
// Add project router - POST
router.post('/project/add', projectController.add)
// View project router - GET
router.get('/project/:id', projectController.project_detail)
// Edit project router - GET
router.get('/project/:id/edit', projectController.project_edit)

// PAGE ROUTER - CRUD

// Add page router - GET
router.get('/page/add', function (req, res) {
  res.render('addPage', {title: 'Create Page'})
})
// Add page router - POST
router.post('/page/add', pageController.add)
// View page router - GET
router.get('/page/:id', pageController.page_detail)
// Edit page router - GET
router.get('/page/:id/edit', pageController.page_edit)

// PROFILE ROUTER - CRUD

// Add profile router - POST

// View profile router - GET

// Edit profile router - GET

// BLOG ROUTER

// Add blog router
router.get('/blog/add', function (req, res) {
  res.render('addBlog')
})

router.post('/blog/add', upload.single('image'), function (req, res) {
  const title = req.body.title
  const slug = req.body.title.replace(/ /g, '-').toLowerCase()
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
    const viewData = {
      title: result[0].title,
      body: result[0].body,
      date: dateFormat(result[0].published_date, 'mmmm dd yyyy'),
      image: result[0].image,
      first_name: result[0].first_name,
      last_name: result[0].last_name,
      profile_id: result[0].profile_id,
      tags: result[0].tags
    }
    res.render('blogPost', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// Edit blog router
router.get('/blog/:id/edit', function (req, res) {
  const blogSlug = req.params.id
  db.getBlogPost(blogSlug, req.app.get('connection'))
  .then((result) => {
    console.log(result)
    res.render('addBlog', result[0])
  })
})

//  PROJECT ROUTERS

// Add project router
router.get('/projects/add', function (req, res) {
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
router.get('/projects/:id', function (req, res) {
  const id = req.params.id

  db.getProjectPost(id, req.app.get('connection'))
  .then((result) => {
    res.render('pagePost', result[0])
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
    for(prop in results) {
      data.push(results[prop].name)
    }
    res.end(JSON.stringify(data))
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
module.exports = router
