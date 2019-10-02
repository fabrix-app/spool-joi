import { FabrixApp } from '@fabrix/fabrix'
import Joi from 'joi'

import { joiConfigSchema } from './schemas'
import { JoiSpool } from './JoiSpool'

export const Utils = {
  init: (app: FabrixApp) => {},
  configure: (app: FabrixApp) => {},
  unload: (app: FabrixApp) => {},


  /**
   * Validate an object given a schema
   * @param app
   * @param joi
   * @param data
   * @param schema
   */
  joiPromise: (app: FabrixApp | JoiSpool, joi: Joi, data: any, schema: Joi.ObjectSchema): Promise<any> => {
    return new Promise((resolve, reject) => {
      joi.validate(data, schema, (err, value) => {
        if (err) {
          return reject(err)
        }
        return resolve(value)
      })
    })
  },

  /**
   * Given an array, and a Schema, validate each item in the array with the same schema
   * @param app
   * @param joi
   * @param list
   * @param schema
   */
  joiPromiseMap: (app: FabrixApp | JoiSpool, joi: Joi, list: any[], schema: Joi.ObjectSchema): Promise<any> => {
    return Promise.all(list.map(data => {
      return Utils.joiPromise(app, joi, data, schema)
    }))
  },

  // Validate config.joi
  validateJoiConfig (app: FabrixApp | JoiSpool, joi: Joi, config): Promise<any> {
    return Utils.joiPromise(app, joi, config, joiConfigSchema)
  }
}
