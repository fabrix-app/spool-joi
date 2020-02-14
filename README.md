# spool-joi

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:package: Joi Spool

A Spool to extend Fabrix with a unified validator for use in other spools and applications.

[Joi](https://hapi.dev/family/joi/) is the most powerful validator for javascript, and making it a spool make it easy to use the same joi validator module in all of your other spools and applications.

## Install
```sh
$ npm install --save @fabrix/spool-joi
```

## Configure

```js
// config/main.ts
import { joiSpool } from '@fabrix/spool-joi'
export const main = {
  spools: [
    // ... other spools
    joiSpool
  ]
}
```

## Configuration

```
// config/joi.ts
export const joi = {
}
```

For more information about store (type and configuration) please see the joi documentation.

## Usage

```
// Create some data to validate
const data = 'key'

// Make a conveince const 
const joi = this.app.validator

// Create a Schema just like you would with joi
const schema = joi.alternatives().try(
  joi.string().valid('key'),
  joi.number().valid(5),
  joi.object({
    a: joi.boolean().valid(true)
  })
)

// Validate the data against the schema
this.app.validate(data, schema)
  .then(res => {
    // Do something with the valid object
  })
  .catch(err => {
    // Do something with the error
  })


// Optionally, you can pass a callback as well  
this.app.validate(data, schema, (error, value) => {
  if (error) {
    // Do somethign with the error
  }
  // Do something with the valid value
})
```


[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-joi.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-joi
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-joi/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-joi/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-joi.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-joi
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-joi.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-joi/coverage

