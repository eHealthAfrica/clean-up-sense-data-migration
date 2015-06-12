'use strict'

var test = require('tape')

var migrate = require('../lib/migrate')

test('skips docs without age', function (t) {
  var doc = { _id: '123' }
  var result = migrate(doc)
  t.equal(result, null)
  t.end()
})

test('skips docs that already have current age format', function (t) {
  var doc = { _id: '123', age: {} }
  var result = migrate(doc)
  t.equal(result, null)
  t.end()
})

test('converts plain number to semantic data structure', function (t) {
  var doc = { _id: '123', age: 42 }
  var result = migrate(doc)
  t.deepEqual(result, [{_id: '123', age: { years: 42 }}])
  t.end()
})
