'use strict'
var PouchDB        = require('pouchdb')
  , pouchdbMigrate = require('pouchdb-migrate')
  , migrate        = require('./migrate')

PouchDB.plugin(pouchdbMigrate)

var cli = {}

cli.run = function run(argv) {
  var db = new PouchDB(argv[0])
  return db.migrate(migrate)
}

function create() {
  return Object.create(cli)
}

module.exports = create
