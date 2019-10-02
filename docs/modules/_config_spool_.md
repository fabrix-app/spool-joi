[spool-joi](../README.md) › [Globals](../globals.md) › ["config/spool"](_config_spool_.md)

# External module: "config/spool"

## Index

### Object literals

* [spool](_config_spool_.md#const-spool)

## Object literals

### `Const` spool

### ▪ **spool**: *object*

Defined in config/spool.ts:6

Spool Configuration

**`see`** {@link https://fabrix.app/docs/spool/config

###  type

• **type**: *string* = "extension"

Defined in config/spool.ts:7

▪ **lifecycle**: *object*

Defined in config/spool.ts:22

Configure the lifecycle of this pack; that is, how it boots up, and which
order it loads relative to other spools.

* **configure**: *object*

  * **emit**: *string[]* =  ['validator:configured']

  * **listen**: *undefined[]* =  []

* **initialize**: *object*

  * **emit**: *string[]* =  ['validator:initialized']

  * **listen**: *undefined[]* =  []

▪ **provides**: *object*

Defined in config/spool.ts:11

API and config resources provided by this Spool.

* **config**: *string[]* =  [ 'joi' ]

* **resources**: *string[]* =  ['schemas']

* **api**: *object*

  * **schemas**: *undefined[]* =  []
