'use strict'

var test = require('tape')

var migrate = require('../lib/migrate')

test('skips docs that do not have an interviewer', function (t) {
  var doc = { _id: '123' }
  var result = migrate(doc)
  t.equal(result, null)
  t.end()
})

test('skips docs that already have valid interviewer', function (t) {
  var doc = { _id: '123', interviewer: {} }
  var result = migrate(doc)
  t.equal(result, null)
  t.end()
})

test('nullifies invalid interviewer', function (t) {
  var doc = { _id: '123', interviewer: 'foo'}
  var result = migrate(doc)
  t.deepEqual(result, [{_id: '123', interviewer: null}])
  t.end()
})
