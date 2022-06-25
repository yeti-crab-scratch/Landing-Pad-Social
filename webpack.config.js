const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist'),
        }
    },

    module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
      },
    ]
},




    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ]
}