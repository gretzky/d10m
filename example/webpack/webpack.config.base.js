const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    modules: ['docs', 'node_modules'],
    extensions: ['.js'],
    mainFields: ['browser', 'main', 'jsnext:main']
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  }
}
