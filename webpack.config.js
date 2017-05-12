const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/[name].js',
    libraryTarget: 'umd',
    library: 'pow'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './demo'),
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
