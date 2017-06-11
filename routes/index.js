const express = require('express')
const router = express.Router()

// Require controller modules
const indexController = require('../controllers/index')
const adminController = require('../controllers/admin')
const blogController = require('../controllers/blog')
const projectController = require('../controllers/project')
const pageController = require('../controllers/page')

// SITE SECTION

// Search - URL - /search
router.get('/search', indexController.search)

// ADMIN SECTION

// Manage Content
router.get('/admin/:id/content', adminController.index)
router.post('/admin/:id/content', adminController.bulk)

// Manage Taxonomy
router.get('/admin/taxonomy', adminController.taxonomy)

// Manage Menu

// BLOG ROUTER - CRUD

// Add blog router - GET
router.get('/blog/add', function (req, res) {
  res.render('addBlog', {title: 'Create Blog'})
})
// Add blog router - POST
router.post('/blog/add', blogController.image, blogController.add)
// Edit blog router - GET
router.get('/blog/:id/edit', blogController.blog_edit)

// PROJECT ROUTER - CRUD

// Add project router - GET
router.get('/project/add', function (req, res) {
  res.render('addProject', {title: 'Create Project'})
})
// Add project router - POST
router.post('/project/add', projectController.add)
// Edit project router - GET
router.get('/project/:id/edit', projectController.project_edit)

// PAGE ROUTER - CRUD

// Add page router - GET
router.get('/page/add', function (req, res) {
  res.render('addPage', {title: 'Create Page'})
})
// Add page router - POST
router.post('/page/add', pageController.add)
// Edit page router - GET
router.get('/page/:id/edit', pageController.page_edit)

// PROFILE ROUTER - CRUD

// Add profile router - POST

// View profile router - GET

// Edit profile router - GET

module.exports = router
