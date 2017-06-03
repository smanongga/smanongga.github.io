// BLOG Controller
var dateFormat = require('dateformat')
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

exports.add = function (req, res) {
  upload.single('image')

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
    res.redirect(`/${results[0].slug}`)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.blog_detail = function (req, res) {
  var blogSlug = req.params.id
  db.getBlogPost(blogSlug, req.app.get('connection'))
  .then((result) => {
    res.render('blogPost', result[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.blog_edit = function (req, res) {
  const id = req.params.id
  db.getBlogPost(id, req.app.get('connection'))
  .then((result) => {
    res.render('addBlog', result[0])
  })
}
