const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode : 'production',
    devtool : 'nosources-source-map',
    plugins : [
        new MiniCssExtractPlugin({
            filename : './css/[name].[contenthash].css',
            chunkFilename : '[id].css',
            output : 'css',
        })
    ],
    module : {
        rules : [
            {
                test : /\.s[ca]ss$/i,
                exclude : /node_modules/,
                use : [
                    { loader : MiniCssExtractPlugin.loader, options : { sourceMap : true }},
                    { loader : 'css-loader', options : {importLoaders : 1, sourceMap : true}},
                    { loader : 'sass-loader', options : { sourceMap : true }},
                ]
            },
            
        ]
    },
    output : {
        filename : './[name].[contenthash].js'
    },
    optimization : {
        minimize : true,
        minimizer : [
            new TerserPlugin({
                cache : true,
                parallel : true,
                sourceMap : true,
            }),
            new OptimizeCssAssetsPlugin({}),
        ]
    }
});