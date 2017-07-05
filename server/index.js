const createServer = require('./server')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const server = createServer(connection)

const PORT = process.env.PORT || 8080

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
