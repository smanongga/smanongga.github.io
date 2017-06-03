var express = require('express')
var router = express.Router()

// Require controller modules
var indexController = require('../controllers/index')
var adminController = require('../controllers/admin')
var blogController = require('../controllers/blog')
var projectController = require('../controllers/project')
var pageController = require('../controllers/page')

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
router.get('/:id/content', adminController.index)
router.post('/:id/content', adminController.update)

// BLOG ROUTER - CRUD

// Add blog router - GET
router.get('/add', function (req, res) {
  res.render('addBlog')
})
// Add blog router - POST
router.post('/add', blogController.add)
// View blog router - GET
router.get('/:id', blogController.blog_detail)
// Edit blog router - POST
router.get('/:id/edit', blogController.blog_edit)

// PROJECT ROUTER - CRUD

// Add project router - GET
router.get('/add', function (req, res) {
  res.render('addBlog')
})
// Add project router - POST
router.post('/add', projectController.add)
// View project router - GET
router.get('/:id', projectController.project_detail)
// Edit project router - POST
router.get('/:id/edit', projectController.project_edit)

// PAGE ROUTER - CRUD

// Add page router - GET
router.get('/add', function (req, res) {
  res.render('addBlog')
})
// Add page router - POST
router.post('/add', pageController.add)
// View page router - GET
router.get('/:id', pageController.page_detail)
// Edit page router - POST
router.get('/:id/edit', pageController.page_edit)

module.exports = router
