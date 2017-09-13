const parse = require('jsdotmd').parse
const getOptions = require('loader-utils').getOptions

module.exports = function (source) {
  this.cacheable()
  return parse(source, getOptions(this))
}
