// Taxonomy controller

var db = require('../db/admin')

exports.add = (req, res) => {
  const taxonomy = {
    title: req.title,
    description: req.description
  }

  db.addTaxonomy(taxonomy, req.app.get('connection'))
  .then(results => {
    res.redirect(`/admin/taxonomy`)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
