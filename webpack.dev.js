const HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  merge = require('webpack-merge'),
  common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'capital-quiz.html',
      template: './src/capital-quiz.html'
    })
  ]
});