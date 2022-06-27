const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },

  devServer: {
    historyApiFallback: true,
    //refresh code;

    static: {
      // publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
    },
    // proxy: {
    //     '/home': {
    //         target: 'http://localhost:3000/',

    //     }
    // }
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
  ],
};
