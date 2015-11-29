'use strict'

module.exports = function (date) {
  date = date || new Date()

  const year = date.getFullYear()
  const month = twoDigit(date.getMonth() + 1)
  const day = twoDigit(date.getDate())

  return `${year}-${month}-${day}`
}

module.exports.withTime = function (datetime) {
  datetime = datetime || new Date()

  const date = this(datetime)
  const hour = twoDigit(datetime.getHours())
  const minutes = twoDigit(datetime.getMinutes())
  const seconds = twoDigit(datetime.getSeconds())

  return `${date} ${hour}:${minutes}:${seconds}`
}

function twoDigit (n) {
  return ('0' + n).slice(-2)
}
