const path = require('path')
const dateFormat = require('dateformat')
const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const hbs = require('express-handlebars')
const passport = require('passport')
const flash = require('connect-flash')
const expressSession = require('express-session')
const Store = require('express-session').Store
const BetterMemoryStore = require(path.join(__dirname), 'memory')

const index = require('./routes/index')

const app = express()

process.on('unhandledRejection', (error, promise) => {
  console.error('UNHANDLED REJECTION', error.stack)
})

// Middleware
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  helpers: {
    selectOption: function (selected, options) {
      return options.fn(this).replace(new RegExp('value="' + `${selected}` + '"'), '$& selected="selected"').replace(new RegExp('>' + selected + '</option>'), ' selected="selected"$&')
    },
    viewFormat: function (date) {
      return dateFormat(date, 'mmmm dd yyyy')
    },
    editFormat: function (date) {
      return dateFormat(date, 'yyyy-mm-dd')
    }
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())
app.use(expressSession({
  name: 'JSESSION',
  secret: 'MYSECRETISVERYSECRET',
  resave: true,
  saveUninitialized: true
}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

// Routes

app.use('/', index)

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}
