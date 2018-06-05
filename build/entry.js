const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  const entry = {}
  const HtmlWebpackPlugins = []

  const template = path.resolve(__dirname, '../src/template.html')
  const files = glob.sync('src/pages/**/main.js')

  const minify =
    process.env.NODE_ENV === 'production'
      ? {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true, // 折叠空白
        removeComments: true, // 删除注释
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        processConditionalComments: true // 保留条件注释
      }
      : false

  files.forEach((item) => {
    const name = item.replace(/^src\/pages\/|\/main.js$/gi, '')
    if (name) {
      entry[name] = `./${item}`

      HtmlWebpackPlugins.push(new HtmlWebpackPlugin({
        template,
        filename: `${name}.html`,
        chunks: ['manifest', 'vendor', 'common'].concat(name),
        minify
      }))
    }
  })

  return {
    entry,
    HtmlWebpackPlugins
  }
}
