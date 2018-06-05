const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const assetsPath = require('./assetsPath')

module.exports = [
  {
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
        options: {
          attrs: ['link:href']
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: [
      process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  },
  {
    test: /\.less$/,
    use: [
      process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg|ico)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: assetsPath('[name][hash].[ext]')
        }
      }
    ]
  },
  {
    test: /\.(eot|svg|ttf|woff)(\?.*)?$/i,
    loader: 'url-loader',
    options: {
      name: assetsPath('[name][hash].[ext]')
    }
  }
]
