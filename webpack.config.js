var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + "/src",
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['react','es2015']
          }
      }
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "./client.min.js"
  }
};
