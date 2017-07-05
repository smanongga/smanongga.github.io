const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', apiRoutes)

module.exports = function (db) {
  server.set('db', db)
  return server
}
