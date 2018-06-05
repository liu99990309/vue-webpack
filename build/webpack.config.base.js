const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const path = require('path')
const getEntry = require('./entry')
const { resolve } = require('./resolve')
const rules = require('./rules')
const config = require('../config')
const assetsPath = require('./assetsPath')

const { entry, HtmlWebpackPlugins } = getEntry()
const plugins = [new VueLoaderPlugin()].concat(HtmlWebpackPlugins)
plugins.push(new webpack.DefinePlugin({
  'GLOBAL.prefixAPI': JSON.stringify(config.prefixAPI)
}))

const isProd = process.env.NODE_ENV === 'production'
const output = {
  filename: isProd ? assetsPath('[name].[chunkhash].js') : '[name].js',
  path: path.resolve(__dirname, '../dist'),
  publicPath: isProd ? `${config.domain}/` : '/'
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  output,
  module: {
    rules
  },
  resolve,
  plugins
}
