const dbAdmin = require('../db/admin')
const dbBlog = require('../db/blog')
const dbProject = require('../db/blog')
const dbSection = require('../db/section')

exports.index = (req, res) => {
  const connection = req.app.get('connection')
  dbBlog.getRecentBlogs(connection)
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
}
exports.blog = (req, res) => {
  const connection = req.app.get('connection')
  dbBlog.getOldBlogs(connection)
  .then(results => {
    const viewData = {
      siteTitle: 'S.Manongga',
      blog: results
    }
    res.render('listBlog', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.project = (req, res) => {
  const connection = req.app.get('connection')
  dbProject.getProjects(connection)
  .then(results => {
    const viewData = {
      siteTitle: 'S.Manongga',
      project: results
    }
    res.render('listProject', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.search = (req, res) => {
  const connection = req.app.get('connection')
  const author = req.query.key
  dbAdmin.getAuthor(author, connection)
  .then(function (results) {
    var data = []
    for (var prop in results) {
      data.push(results[prop].name)
    }
    res.end(JSON.stringify(data))
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
