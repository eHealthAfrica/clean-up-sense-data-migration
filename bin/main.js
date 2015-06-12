#! /usr/bin/env node

var cli = require('../lib/cli')

cli()
  .run(process.argv.slice(2))
  .then(function (response) {
    console.log("Done.")
  })
  .catch(function (error) {
    console.error("Error:", error.message)
  })
