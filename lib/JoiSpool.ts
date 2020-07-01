import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import Joi from '@hapi/joi'
import { isArray } from 'lodash'
import { Utils } from './Utils'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'
import { FabrixApp } from '@fabrix/fabrix'

export class JoiSpool extends ExtensionSpool {

  private _joi = Joi
  public joiConfig: any

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      validator: {
        get: () => {
          return this.joi
        },
        set: (newInstances) => {
          throw new Error('validator can not be set through FabrixApp, check spool-joi instead')
        },
        enumerable: true,
        configurable: true
      },
      validate: {
        get: () => {
          return this._validate
        },
        set: (newInstances) => {
          throw new Error('validate can not be set through FabrixApp, check spool-joi instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Use a joi getter so that configuration can be grabbed
   */
  get joi () {
    return this._joi
  }

  /**
   * Extension Alias: Validate
   * @param data
   * @param schema
   * @param callback
   * @private
   * For some odd reason, that I am not sure why, <this> is actually the fabrix app and not JoiSpool,
   * I'm guessing that it's because when it's being called, it's an extension?  And the "this" context changes?
   */
  private _validate(data, schema, callback?: (error, value) => any): Promise<any> | any {
    if (isArray(data) && !callback) {
      return Utils.joiPromiseMap(this, this.validator, data, schema)
    }
    else if (data && !callback) {
      return Utils.joiPromise(this, this.validator, data, schema)
    }
    else if (callback) {
      // If new version of joi
      if (schema.validate) {
        const {error, value} = schema.validate(data) // this.validator.validate(data, schema)
        return callback(error, value)
      }
      // If older version of joi
      else {
        const {error, value} = this.validator.validate(data, schema)
        return callback(error, value)
      }
    }
    else {
      throw new Error('Not valid arguments')
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    // TODO implement errors
    // const requiredSpools = [ 'errors' ]
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-joi requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('joi')) {
      return Promise.reject(new Error('No configuration found at config.joi!'))
    }

    return Promise.all([
      Utils.validateJoiConfig(this.app, this.joi, this.app.config.get('joi'))
    ])
      .catch(err => {
        return Promise.reject(err)
      })
  }

  /**
   * Configure Joi
   */
  configure() {
    return Utils.configure(this.app)
  }

  /**
   * Initializer Joi
   */
  async initialize() {
    return Utils.init(this.app)
  }

  /**
   * unload Joi
   */
  async unload() {
    return Utils.unload(this.app)
  }

  async sanity() {
    //
  }
}
