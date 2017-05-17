const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, '../../dist')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}