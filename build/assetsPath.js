const path = require('path')
const { folder } = require('../config')

module.exports = _path => path.posix.join(folder + _path)
