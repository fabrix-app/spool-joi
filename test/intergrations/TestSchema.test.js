'use strict'
/* global describe, it */
const assert = require('assert')
const _ = require('lodash')

describe('# Schema', () => {
  it('should exist', () => {
    assert(global.app.validator)
  })
})
