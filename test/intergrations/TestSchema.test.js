'use strict'
/* global describe, it */
const assert = require('assert')
const _ = require('lodash')

const Joi = require('joi')

describe('# Schema', () => {
  it('should exist', () => {
    assert(global.app.validator)
  })
})
