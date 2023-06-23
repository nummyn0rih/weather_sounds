const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: '',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'source', to: 'dest' }],
    }),
  ],
};
