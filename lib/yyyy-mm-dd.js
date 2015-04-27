module.exports = function (date) {
  if (!date) date = new Date()
  return date.getFullYear() + '-' +
         twoDigit(date.getMonth() + 1) + '-' +
         twoDigit(date.getDate())
}

module.exports.withTime = function (date) {
  if (!date) date = new Date()
  return this(date) + ' ' +
         twoDigit(date.getHours()) + ':' +
         twoDigit(date.getMinutes()) + ':' +
         twoDigit(date.getSeconds())
}

function twoDigit (n) {
  return ('0' + n).slice(-2)
}

