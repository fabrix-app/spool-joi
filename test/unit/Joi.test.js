'use strict'
/* global describe, it */
const assert = require('assert')
const _ = require('lodash')

describe('Validator', () => {
  it('should exist', () => {
    assert(global.app.validator)
    assert(global.app.validate)
  })

  it('should validate', (done) => {
    const data = 'key'

    const joi = global.app.validator
    const schema = joi.alternatives().try(
      joi.string().valid('key'),
      joi.number().valid(5),
      joi.object({
        a: joi.boolean().valid(true)
      })
    )
    const {value, error} = schema.validate(data)
    if (error) {
      done(error)
    }
    done()
  })

  it('should validate with callback', (done) => {
    const data = 'key'

    const joi = global.app.validator

    const schema = joi.alternatives().try(
      joi.string().valid('key'),
      joi.number().valid(5),
      joi.object({
        a: joi.boolean().valid(true)
      })
    )
    global.app.validate(data, schema, (err, value) => {
      if (err) {
        done(err)
      }
      done()
    })

  })

  it('should validate with promise', (done) => {
    const data = 'key'

    const joi = global.app.validator

    const schema = joi.alternatives().try(
      joi.string().valid('key'),
      joi.number().valid(5),
      joi.object({
        a: joi.boolean().valid(true)
      })
    )
    global.app.validate(data, schema)
      .then(res => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('should validate list with promise', (done) => {
    const data = ['key']

    const joi = global.app.validator
    const schema = joi.alternatives().try(
      joi.string().valid('key'),
      joi.number().valid(5),
      joi.object({
        a: joi.boolean().valid(true)
      })
    )

    global.app.validate(data, schema)
      .then(res => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
