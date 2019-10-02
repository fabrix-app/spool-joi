[spool-joi](../README.md) › [Globals](../globals.md) › ["Utils"](_utils_.md)

# External module: "Utils"

## Index

### Object literals

* [Utils](_utils_.md#const-utils)

## Object literals

### `Const` Utils

### ▪ **Utils**: *object*

Defined in Utils.ts:7

###  configure

▸ **configure**(`app`: FabrixApp): *void*

Defined in Utils.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`app` | FabrixApp |

**Returns:** *void*

###  init

▸ **init**(`app`: FabrixApp): *void*

Defined in Utils.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`app` | FabrixApp |

**Returns:** *void*

###  joiPromise

▸ **joiPromise**(`app`: FabrixApp | [JoiSpool](../classes/_joispool_.joispool.md), `joi`: Joi, `data`: any, `schema`: Joi.ObjectSchema): *Promise‹any›*

Defined in Utils.ts:20

Validate an object given a schema

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | FabrixApp &#124; [JoiSpool](../classes/_joispool_.joispool.md) | - |
`joi` | Joi | - |
`data` | any | - |
`schema` | Joi.ObjectSchema |   |

**Returns:** *Promise‹any›*

###  joiPromiseMap

▸ **joiPromiseMap**(`app`: FabrixApp | [JoiSpool](../classes/_joispool_.joispool.md), `joi`: Joi, `list`: any[], `schema`: Joi.ObjectSchema): *Promise‹any›*

Defined in Utils.ts:38

Given an array, and a Schema, validate each item in the array with the same schema

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | FabrixApp &#124; [JoiSpool](../classes/_joispool_.joispool.md) | - |
`joi` | Joi | - |
`list` | any[] | - |
`schema` | Joi.ObjectSchema |   |

**Returns:** *Promise‹any›*

###  unload

▸ **unload**(`app`: FabrixApp): *void*

Defined in Utils.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`app` | FabrixApp |

**Returns:** *void*

###  validateJoiConfig

▸ **validateJoiConfig**(`app`: FabrixApp | [JoiSpool](../classes/_joispool_.joispool.md), `joi`: Joi, `config`: any): *Promise‹any›*

Defined in Utils.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`app` | FabrixApp &#124; [JoiSpool](../classes/_joispool_.joispool.md) |
`joi` | Joi |
`config` | any |

**Returns:** *Promise‹any›*
