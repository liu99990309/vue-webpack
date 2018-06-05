const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const assetsPath = require('./assetsPath')

module.exports = merge(baseConfig, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: assetsPath('[name].[chunkhash].css')
    })
  ]
})
