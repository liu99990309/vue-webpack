const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const config = require('../config')

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'initial',
      name: 'common',
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    compress: true,
    proxy: {
      [`${config.prefixAPI}/*`]: {
        target: 'http://www.efg.com',
        changeOrigin: true
      }
    },
    stats: {
      assets: true,
      colors: true,
      errors: true,
      errorDetails: true,
      hash: true
    }
  }
})
