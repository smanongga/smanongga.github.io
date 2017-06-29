var express = require('express')
var multer = require('multer')
var router = express.Router()

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


// SITE AUTHENTICATION

// Register - URL - /register
router.post('/register', authHelpers.loginRedirect, authController.register)
// Login - URL - /login
router.post('/login', authHelpers.loginRedirect, authController.login)
// Logout - URL - /logout
router.get('/logout', authHelpers.loginRequired, authController.logout)

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
router.post('/taxonomy/add', taxonomyController.add)

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

module.exports = router
