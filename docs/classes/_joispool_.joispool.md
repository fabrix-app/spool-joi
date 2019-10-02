[spool-joi](../README.md) › [Globals](../globals.md) › ["JoiSpool"](../modules/_joispool_.md) › [JoiSpool](_joispool_.joispool.md)

# Class: JoiSpool

## Hierarchy

* ExtensionSpool

  ↳ **JoiSpool**

## Indexable

* \[ **key**: *string*\]: any

## Index

### Constructors

* [constructor](_joispool_.joispool.md#constructor)

### Properties

* [_joi](_joispool_.joispool.md#private-_joi)
* [extensions](_joispool_.joispool.md#extensions)
* [joiConfig](_joispool_.joispool.md#joiconfig)
* [type](_joispool_.joispool.md#static-type)

### Accessors

* [joi](_joispool_.joispool.md#joi)

### Methods

* [_validate](_joispool_.joispool.md#private-_validate)
* [configure](_joispool_.joispool.md#configure)
* [initialize](_joispool_.joispool.md#initialize)
* [sanity](_joispool_.joispool.md#sanity)
* [unload](_joispool_.joispool.md#unload)
* [validate](_joispool_.joispool.md#validate)

## Constructors

###  constructor

\+ **new JoiSpool**(`app`: any): *[JoiSpool](_joispool_.joispool.md)*

Defined in JoiSpool.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`app` | any |

**Returns:** *[JoiSpool](_joispool_.joispool.md)*

## Properties

### `Private` _joi

• **_joi**: *any* =  Joi

Defined in JoiSpool.ts:13

___

###  extensions

• **extensions**: *object*

*Inherited from void*

Defined in /Users/scott/@fabrix/spool-joi/node_modules/@fabrix/fabrix/dist/common/spools/extension.d.ts:3

#### Type declaration:

* \[ **key**: *string*\]: any

___

###  joiConfig

• **joiConfig**: *any*

Defined in JoiSpool.ts:14

___

### `Static` type

▪ **type**: *string*

*Inherited from void*

Defined in /Users/scott/@fabrix/spool-joi/node_modules/@fabrix/fabrix/dist/common/spools/extension.d.ts:6

## Accessors

###  joi

• **get joi**(): *any*

Defined in JoiSpool.ts:50

Use a joi getter so that configuration can be grabbed

**Returns:** *any*

## Methods

### `Private` _validate

▸ **_validate**(`data`: any, `schema`: any, `callback?`: function): *Promise‹any› | any*

Defined in JoiSpool.ts:63

Extension Alias: Validate

**Parameters:**

▪ **data**: *any*

▪ **schema**: *any*

▪`Optional`  **callback**: *function*

▸ (`error`: any, `value`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`value` | any |

**Returns:** *Promise‹any› | any*

___

###  configure

▸ **configure**(): *void*

Defined in JoiSpool.ts:106

Configure Joi

**Returns:** *void*

___

###  initialize

▸ **initialize**(): *Promise‹void›*

Defined in JoiSpool.ts:113

Initializer Joi

**Returns:** *Promise‹void›*

___

###  sanity

▸ **sanity**(): *Promise‹void›*

Defined in JoiSpool.ts:124

**Returns:** *Promise‹void›*

___

###  unload

▸ **unload**(): *Promise‹void›*

Defined in JoiSpool.ts:120

unload Joi

**Returns:** *Promise‹void›*

___

###  validate

▸ **validate**(): *Promise‹any[]›*

Defined in JoiSpool.ts:82

Validate Configuration

**Returns:** *Promise‹any[]›*
