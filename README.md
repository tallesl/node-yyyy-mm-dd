# yyyy-mm-dd

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]

[![][npm-img]][npm]

Formats a Date as yyyy-MM-dd.

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

[build]:               https://travis-ci.org/tallesl/yyyy-mm-dd
[build-img]:           https://travis-ci.org/tallesl/yyyy-mm-dd.png
[coverage]:            https://coveralls.io/r/tallesl/yyyy-mm-dd?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/yyyy-mm-dd/badge.png?branch=master
[dependencies]:        https://david-dm.org/tallesl/yyyy-mm-dd
[dependencies-img]:    https://david-dm.org/tallesl/yyyy-mm-dd.png
[devdependencies]:     https://david-dm.org/tallesl/yyyy-mm-dd#info=devDependencies
[devDependencies-img]: https://david-dm.org/tallesl/yyyy-mm-dd/dev-status.png
[version]:             http://badge.fury.io/js/yyyy-mm-dd
[version-img]:         https://badge.fury.io/js/yyyy-mm-dd.png
[npm]:                 https://nodei.co/npm/yyyy-mm-dd
[npm-img]:             https://nodei.co/npm/yyyy-mm-dd.png?mini=true
