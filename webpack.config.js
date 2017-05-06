const path = require('path');
const webpack = require('webpack');
const node_dir = path.join(__dirname, './node_modules/');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/[name].js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
    noInfo: false 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
