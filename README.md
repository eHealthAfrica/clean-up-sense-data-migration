semantic-age-migration
======================

Upgrade `age` from plain number to a more descriptive data structure

Usage
-----

```sh
git clone https://github.com/eHealthAfrica/semantic-age-migration.git
cd semantic-age-migration
./bin/main.js http://localhost:5984/persons
```

This will change `person` docs that have an `age` of something like

```json
"age": 42
```

to become

```json
"age": {"years": 42}
```

Testing
-------

Run the tests with

```sh
npm test
```
