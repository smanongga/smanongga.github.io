const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/blogs', (req, res) => {
  const connection = req.app.get('db')
  db.getAllBlogs(connection)
  .then((data) => {
    res.json({result: data})
  })
})

module.exports = router
