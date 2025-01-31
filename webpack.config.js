const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({patterns:[
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'public'),
          globOptions: {
            ignore: ['**/index.html'], // Исключаем index.html из копирования
          }
        }
      ]}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/, // Применяется ко всем JS файлам
      exclude: /node_modules/, // Исключаем директорию node_modules
      use: {
        loader: 'babel-loader', // Используем babel-loader для транспиляции
        options: {
          presets: ['@babel/preset-env'] // Указываем пресет для @babel/preset-env
        },
      },
    }]
  }
}

