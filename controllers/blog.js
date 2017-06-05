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

function slugify (text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '')          // Trim - from end of text
}
exports.image = upload.single('image')

exports.add = function (req, res) {
  const blog = {
    title: req.body.title,
    slug: slugify(req.body.title),
    body: req.body.body,
    author: req.body.typeahead,
    summary: req.body.summary,
    tags: req.body.tags,
    status: req.body.status,
    date: dateFormat(req.body.publishedDate, 'yyyy-mm-dd 08:00:00'),
    image: req.file.path
  }

  // Form validation
  req.checkBody('title', 'Title is required').notEmpty()
  req.checkBody('author', 'Author is required').notEmpty()
  req.checkBody('publishedDate', 'Published date is required').notEmpty()
  req.checkBody('status', 'Status is required').notEmpty()

   // Data sanitization
  req.sanitize('body').escape()

  const errors = req.validationErrors()

  if (errors) {
  // Show error to user
    res.render('addBlog', {title: 'Create Blog', blog: blog, errors: errors})
    return
  } else {
    db.addBlogPost(blog, req.app.get('connection'))
  .then(results => {
    res.redirect(`/blog/${results[0].slug}`)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
  }
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
