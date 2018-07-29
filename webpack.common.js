const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Bergen STEM',
      meta: {viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'},
      favicon: './src/images/bcc-favicon.ico',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: [
                /node_modules/,
                './src/components/landing/Triangle.js'
              ],
              use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader"
            ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'babel-loader'
              },
              {
                loader: 'react-svg-loader'
              }
            ]
            
          }
      ]
  },
  devServer: {
    historyApiFallback: true,
  },
};