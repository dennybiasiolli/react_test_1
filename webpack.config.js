var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPlugin = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  // When HTMLWebpackPlugin creates a new HTML file, that new HTML file will
  // contain a <script> tag linking to webpack's new JavaScript file.
  // This <script> tag can appear in either the HTML file's <head> or <body>.
  // You choose which one via the inject property.
  inject: 'body' // or 'head',
});

module.exports = {
  entry: __dirname + '/app/index.jsx',
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPlugin],
  devServer: {
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
