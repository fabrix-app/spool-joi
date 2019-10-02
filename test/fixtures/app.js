'use strict'

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    schemas: {
      TestSchema: require('./TestSchema')
    }
  },
  config: {
    joi: {

    },
    main: {
      spools: [
        require('../../dist').JoiSpool
      ]
    }
  }
}


