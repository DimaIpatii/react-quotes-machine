/// Read Caching section 
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
    mode : 'production',
    devtool: 'source-map',
    module : {
        rules : [
            {
                test : /\.(sa|sc|c)ss$/i,
                use : [
                    {loader : MiniCssExtractPlugin.loader},
                    {loader : 'css-loader'},
                    {loader : 'sass-loader'}
                ]
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({filename : '[name].[contenthash].css'}),
    ],
    optimization : {
        minimize : true,
        minimizer : [new TerserPlugin({
            parallel: true,
        })],
        moduleIds: 'deterministic',
        runtimeChunk : 'single',
        splitChunks : {
            cacheGroups : {
                vendor : {
                    test : /[\\/]node_modules[\\/]/,
                    name : 'vendors',
                    chunks : 'all'
                }
            }
        }
    },
    output : {
        filename : '[name].[contenthash].js',
    }
});
