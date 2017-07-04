var db = require('../db/section')

exports.index = (req, res) => {
  db.getFrontpageContent(req.app.get('connection'))
  .then((results) => {
    console.log(results)
    res.render('index', results)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.blog = (req, res) => {
  db.getOldBlogs(req.app.get('connection'))
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
  db.getProjects(req.app.get('connection'))
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
