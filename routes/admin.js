// ADMIN SECTION
var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:id/content', function (req, res) {
  const contentType = req.params.id
  db.getAdminContent(contentType, req.app.get('connection'))
  .then((results) => {
    const viewData = {
      content: results,
      siteTitle: contentType
    }
    res.render('adminContent', viewData)
  })
})

router.post('/:id/content', function (req, res) {
  const contentType = req.params.id
  const contentId = req.body.contentId
  console.log(contentId)
  db.bulkOperation(contentType, contentId, req.app.get('connection'))
  .then((results) => {
    res.redirect('/admin/results[0].type/' + 'content')
  })
})

module.exports = router
