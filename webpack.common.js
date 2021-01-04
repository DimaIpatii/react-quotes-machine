const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : {
        app : './src/js/index.js'
    },

    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : path.resolve(__dirname,'dist/index.html'),
        })
    ],

    output : {
        path : path.resolve(__dirname, './dist')
    }
}