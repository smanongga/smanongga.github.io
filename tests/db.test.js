
var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 26
  return db.getUsers(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getUsers gets a single user', function (t) {
  var expected = 'Ambitious Aardvark'
  return db.getUser(99901, t.context.connection)
    .then(function (result) {
      var actual = result[0].name
      t.is(expected, actual)
    })
})
