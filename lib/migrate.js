'use strict'

function migrate(doc) {
  var result = null

  if (typeof doc.age === 'number') {
    doc.age = { years: doc.age }
    result = [doc]
  }

  if (typeof doc.interviewer !== 'object') {
    doc.interviewer = null
    result = [doc]
  }

  return result
}

module.exports = migrate
