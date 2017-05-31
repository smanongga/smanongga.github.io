var express = require('express')
var router = express.Router()
var multer = require('multer')
var dateFormat = require('dateformat')
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
      content: [],
      siteTitle: contentType
    }
    for (var i = 0; i < results.length; i++) {
      const PostEntry = {
        title: results[i].title,
        published_date: dateFormat(results[i].published_date, 'mmmm dd yyyy'),
        status: results[i].status,
        slug: results[i].slug,
        type: results[i].type,
        name: results[i].name
      }
      viewData.content.push(PostEntry)
    }
    res.render('adminContent', viewData)
  })
})

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
        slugs: results[i].slugs}
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
  .then(results => {
    const viewData = {
      blog: results
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
})

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
    res.redirect(`/blog/${results[0].id}`)
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
  const id = req.params.id
  db.getBlogPost(id, req.app.get('connection'))
  .then((result) => {
    res.render('addBlog', result[0])
  })
})

// router.post('/blog/add', (req, res) => {
//   const id = req.params.id
//   db.addBlogPost(id, req.app.get('connection'))
//    .then((result) => {
//      res.render('blogPost', result[0])
//    })
// })

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
  const id = req.params.id
  db.getPagePost(id, req.app.get('connection'))
  .then((result) => {
    res.render('pagePost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
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
