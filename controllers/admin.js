// ADMIN SECTION
const async = require('async')
const db = require('../db')

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

exports.bulk = function (req, res, next) {
  const contentIds = req.body.contentId

  switch (req.body.bulkAction) {
    case 'Published':
      async.forEach(contentIds, function (id, callback) {
        db.updateOperation(id, req.body.bulkAction, req.params.id, req.app.get('connection'))
        callback()
      }, function (err) {
        if (err) return next(err)
        res.redirect(`/admin/${req.params.id}/content`)
      })
      break

    case 'Unpublished':
      async.forEach(contentIds, function (id, callback) {
        db.updateOperation(id, req.body.bulkAction, req.params.id, req.app.get('connection'))
        callback()
      }, function (err) {
        if (err) return next(err)
        res.redirect(`/admin/${req.params.id}/content`)
      })
      break

    case 'Delete':
      async.forEach(contentIds, function (id, callback) {
        db.deleteOperation(id, req.body.bulkAction, req.params.id, req.app.get('connection'))
        callback()
      }, function (err) {
        if (err) return next(err)
        res.redirect(`/admin/${req.params.id}/content`)
      })
      break

    default:
      break
  }
}

exports.taxonomy = function (req, res) {
  db.getTaxonomy(req.app.get('connection'))
  .then((results) => {
    const viewData = {
      siteTitle: 'S.Manongga',
      taxonomy: results
    }
    res.render('adminTaxonomy', viewData)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

exports.menu = function (req, res) {

}
