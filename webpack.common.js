const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry : ["@babel/polyfill", './src/react/index.js'],
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title : 'Randome Quote Machine',
            filename : "index.html",
            template : "src/index.html",
            inject : 'head',
            scriptLoading : 'defer'
        })
    ],
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : '[name].bundle.js'
    }
}