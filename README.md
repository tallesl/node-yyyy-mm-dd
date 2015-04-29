# yyyy-mm-dd

[![build](https://travis-ci.org/tallesl/yyyy-mm-dd.png)](https://travis-ci.org/tallesl/yyyy-mm-dd)
[![coverage](https://coveralls.io/repos/tallesl/yyyy-mm-dd/badge.png?branch=master)](https://coveralls.io/r/tallesl/yyyy-mm-dd?branch=master)
[![dependencies](https://david-dm.org/tallesl/yyyy-mm-dd.png)](https://david-dm.org/tallesl/yyyy-mm-dd)
[![devDependencies](https://david-dm.org/tallesl/yyyy-mm-dd/dev-status.png)](https://david-dm.org/tallesl/yyyy-mm-dd#info=devDependencies)
[![npm module](https://badge.fury.io/js/yyyy-mm-dd.png)](http://badge.fury.io/js/yyyy-mm-dd)

[![npm](https://nodei.co/npm/yyyy-mm-dd.png?mini=true)](https://nodei.co/npm/yyyy-mm-dd/)

Formats a js' Date in yyyy-MM-dd format.

## Usage

```javascript
$ npm install yyyy-mm-dd
yyyy-mm-dd@1.0.0 node_modules/yyyy-mm-dd
$ node
> var yyyymmdd = require('yyyy-mm-dd')
undefined
> yyyymmdd()
'2015-04-29'
> yyyymmdd.withTime()
'2015-04-29 16:51:09'
> yyyymmdd(new Date(1999, 0, 1))
'1999-01-01'
```
