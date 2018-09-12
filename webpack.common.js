const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      // title: 'Bergen STEM',
      // meta: {viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'},
      favicon: './src/images/bcc-favicon.ico', 
      template: 'index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              include: path.resolve(__dirname, 'src'),
              exclude: [
                /node_modules/,
                './src/components/landing/Triangle.js'
              ],
              use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: [
              process.env.NODE_ENV !== 'production' 
              ? 'style-loader' 
              : MiniCssExtractPlugin.loader,
              'css-loader'           
            ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            exclude: /bgs/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            include: /bgs/,
            use: [
              'url-loader'
            ]
          },
          {
            test: /\.svg$/,
            exclude: /bgs/,
            use: [
              {
                loader: 'babel-loader'
              },
              {
                loader: 'react-svg-loader'
              },
            ]
            
          },
          { 
            test: /\.svg$/,
            include: /bgs/,
            use: {
              loader: 'svg-url-loader' 
            }                        
          },
      ]
  },
  devServer: {
    historyApiFallback: true,
  },
};