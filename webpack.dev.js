const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common,{
    mode : 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer : {
        index: 'index.html',
        contentBase : path.join(__dirname, 'dist'),
        historyApiFallback: true,
        hot : true,
        compress : true,
    },
    module : {
        rules : [
            {
                test : /\.(sa|sc|c)ss$/i,
                exclude : /node_modules/,
                use : [
                    {loader : MiniCssExtractPlugin.loader},
                    {loader : 'css-loader', options : {importLoaders : 1,sourceMap : true}},
                    {loader : 'sass-loader', options : {sourceMap : true}}
                ]
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'style.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization : {
        runtimeChunk: true
    }
});