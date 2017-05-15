const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const index = require('./routes/index')

const app = express()

// Middleware

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// Routes

app.use('/', index)

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}
