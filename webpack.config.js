var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2016', 'react']
      }
    },{
      test: /.css$/,
      loaders: ['style-loader', 'css-loader']
    }]
  }
}