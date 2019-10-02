import { FabrixApp } from '@fabrix/fabrix'
import { FabrixGeneric } from '@fabrix/fabrix/dist/common'
import { Utils } from './Utils'

export class Schema extends FabrixGeneric {
  static schema () {
    throw new Error('Schema should be overridden by subclass! and return')
  }

  // validatePromiseArray(data) {
  //   return Utils.joiPromiseMap(this.app, this.app.validator, data, this.schema())
  // }
  //
  // validatePromise(data) {
  //   return Utils.joiPromise(this.app, this.app.validator, data, this.schema())
  // }
  //
  // validate(data: any, callback?: (response) => any) {
  //   if (callback) {
  //     const response = this.app.validator(data, this.schema())
  //     return callback(response)
  //   }
  //   else {
  //     return this.validatePromise(data)
  //   }
  // }
}
