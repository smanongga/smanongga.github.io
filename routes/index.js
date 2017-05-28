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

module.exports = router
