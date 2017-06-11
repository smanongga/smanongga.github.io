const express = require('express')
const convertKeys = require('convert-keys')
const bodyParser = require('body-parser')

const router = express.Router()

const dbBlog = require('../db/blog')
const dbProject = require('../db/project')
const dbPage = require('../db/page')

router.use(bodyParser.json())

// Blog CRUD
router.get('/blogs', (req, res) => {
  const connection = req.app.get('connection')
  dbBlog.getRecentBlogs(connection)
  .then((data) => {
    res.json(convertKeys.toCamel(data))
  })
})

router.get('/blog/:id', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbBlog.getBlogPost(blogSlug, connection)
  .then((data) => {
    res.json(convertKeys.toCamel(data[0]))
  })
})

router.get('/blog/:id/edit', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbBlog.getBlogPost(blogSlug, connection)
  .then((data) => {
    res.json(convertKeys.toCamel(data[0]))
  })
})

router.get('/blog/:id/delete', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbBlog.deleteBlogPost(blogSlug, connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

// Project CRUD
router.get('/projects', (req, res) => {
  const connection = req.app.get('connection')
  dbProject.getProjects(connection)
  .then((data) => {
    res.json(convertKeys.toCamel(data))
  })
})

router.get('/project/:id', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbProject.getProjectPost(blogSlug, connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

router.get('/project/:id/edit', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbProject.getProjectPost(blogSlug, connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

router.get('/project/:id/delete', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbBlog.deleteBlogPost(blogSlug, connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

// Page CRUD
router.get('/pages', (req, res) => {
  const connection = req.app.get('connection')
  dbPage.getPages(connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

router.get('/page/:id', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbPage.getPagePost(blogSlug, connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

router.get('/page/:id/edit', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbPage.getPagePost(blogSlug, connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

router.get('/page/:id/delete', (req, res) => {
  const connection = req.app.get('connection')
  const blogSlug = req.params.id
  dbPage.deletePagePost(blogSlug, connection)
  .then((data) => {
    res.json({result: convertKeys.toCamel(data)})
  })
})

module.exports = router
