const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({patterns:[
        {
          from: path.resolve(__dirname, 'public'),
          //to: path.resolve(__dirname, 'public'),
          globOptions: {
            ignore: ['**/index.html'], // Исключаем index.html из копирования
          }
        }
      ]}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
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

