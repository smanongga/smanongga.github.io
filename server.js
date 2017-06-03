const path = require('path')
const dateFormat = require('dateformat')
const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const hbs = require('express-handlebars')

const index = require('./routes/index')
const blog = require('./routes/blog')
const page = require('./routes/page')
const admin = require('./routes/admin')
const project = require('./routes/project')

const app = express()

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

// Routes

app.use('/', index)
app.use('/blog/', blog)
app.use('/page/', page)
app.use('/project/', project)
app.use('/admin/', admin)

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}
