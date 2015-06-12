clean-up-sense-data-migration
=============================

Clean up data inconsitencies in legacy data. Namely this will do the following:

- upgrade plain number values for `age` on `person` to match current data-model
- nullify invalid values for `interviewer` on `followup`

Usage
-----

```sh
git clone https://github.com/eHealthAfrica/clean-up-sense-data-migration.git
cd clean-up-sense-data-migration
./bin/main.js http://localhost:5984/persons
```

Testing
-------

Run the tests with

```sh
npm test
```
