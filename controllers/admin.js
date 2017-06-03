// ADMIN SECTION

var db = require('../db')

exports.index = function (req, res) {
  const contentType = req.params.id
  db.getAdminContent(contentType, req.app.get('connection'))
  .then((results) => {
    const viewData = {
      content: results,
      siteTitle: contentType
    }
    res.render('adminContent', viewData)
  })
}
exports.update = function (req, res) {
  const contentType = req.params.id
  const contentId = req.body.contentId
  console.log(contentId)
  db.bulkOperation(contentType, contentId, req.app.get('connection'))
  .then((results) => {
    res.redirect('/admin/results[0].type/' + 'content')
  })
}
