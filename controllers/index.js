var db = require('../db')

exports.index = function (req, res) {
  db.getRecentBlogs(req.app.get('connection'))
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
exports.blog = function (req, res) {
  db.getOldBlogs(req.app.get('connection'))
  .then(results => {
    const viewData = {
      siteTitle: 'S.Manongga',
      blog: results
    }
    res.render('blogList', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.project = function (req, res) {
  db.getProjects(req.app.get('connection'))
  .then(results => {
    const viewData = {
      siteTitle: 'S.Manongga',
      project: results
    }
    res.render('projectList', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.search = function (req, res) {
  var author = req.query.key
  db.getAuthor(author, req.app.get('connection'))
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
