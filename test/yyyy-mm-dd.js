var assert   = require('assert')
  , yyyymmdd = require('../lib/yyyy-mm-dd')

it('should format current date correctly', function () {
  assert(/^(\d{4})-(\d{2})-(\d{2})$/.test(yyyymmdd()))
})

it('should format a given date correctly', function () {
  assert.equal(yyyymmdd(new Date(1970, 0, 1)), '1970-01-01')
  assert.equal(yyyymmdd(new Date(1970, 0, 1)), '1970-01-01')
  assert.equal(yyyymmdd(new Date(1999, 11, 31)), '1999-12-31')
})

it('should format current date with time correctly', function () {
  assert(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.test(yyyymmdd.withTime()))
})

it('should format a given date with time correctly', function () {
  assert.equal(yyyymmdd.withTime(new Date(1999, 11, 31)), '1999-12-31 00:00:00')
  assert.equal(yyyymmdd.withTime(new Date(1234, 4, 6, 7, 8, 9)), '1234-05-06 07:08:09')
})

