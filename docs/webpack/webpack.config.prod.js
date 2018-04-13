const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = merge.smart(baseConfig, {
  bail: true,
  mode: 'production',
  entry: [path.join(__dirname, '../index.js')],
  output: {
    filename: 'bundle.[chunkhash:8].js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ]
})
