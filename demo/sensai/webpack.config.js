const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

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
            presets: [
              'es2015',
              'stage-3'
            ]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader', 
            'sass-loader', 
            { 
              loader: 'postcss-loader', 
              options: { plugins: () => [autoprefixer] }
            }
          ]
        })
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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: './dist/style.css',
      allChunks: true
    })
  ]
}
