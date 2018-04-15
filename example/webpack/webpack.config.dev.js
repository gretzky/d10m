const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  entry: [path.join(__dirname, '../index.js')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(process.cwd(), 'index.html')
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    hot: true,
    publicPath: '/',
    quiet: true,
    port: 3000
  }
})
