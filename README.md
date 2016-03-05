# yyyy-mm-dd

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][version-img]][version]

Formats a Date as yyyy-MM-dd.

[build]:               https://travis-ci.org/tallesl/node-yyyy-mm-dd
[build-img]:           https://travis-ci.org/tallesl/node-yyyy-mm-dd.svg
[coverage]:            https://coveralls.io/r/tallesl/node-yyyy-mm-dd?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-yyyy-mm-dd/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-yyyy-mm-dd
[dependencies-img]:    https://david-dm.org/tallesl/node-yyyy-mm-dd.svg
[devdependencies]:     https://david-dm.org/tallesl/node-yyyy-mm-dd#info=devDependencies
[devDependencies-img]: https://david-dm.org/tallesl/node-yyyy-mm-dd/dev-status.svg
[version]:             https://npmjs.com/package/yyyy-mm-dd
[version-img]:         https://badge.fury.io/js/yyyy-mm-dd.svg

## Usage

```js
$ npm install yyyy-mm-dd
(...)
$ node
> let yyyymmdd = require('yyyy-mm-dd')
undefined
> yyyymmdd()
'2015-04-29'
> yyyymmdd.withTime()
'2015-04-29 16:51:09'
> yyyymmdd(new Date(1999, 0, 1))
'1999-01-01'
```
