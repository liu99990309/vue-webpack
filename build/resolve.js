const path = require('path')

module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@components': path.resolve(__dirname, '../src/components')
    }
  }
}
