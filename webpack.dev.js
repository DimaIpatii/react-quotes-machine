const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = merge(common, {
    mode: 'development', 
    devtool : 'inline-source-map',
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk : true,
        /* hot: true, */
        overlay: true,
        publicPath: '/',
        historyApiFallback: true,
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename: './css/[name].bundle.css',
            chunkFilename : '[id].css',
            output : 'css',
            
        })
    ],
    module : {
        rules : [
            {
                test : /\.s[ac]ss$/i,
                exclude : /node_modules/,
                use : [
                    { loader : MiniCssExtractPlugin.loader, options: {sourceMap : true} },
                    { loader : 'css-loader', options : { importLoaders : 1, sourceMap : true } },
                    { loader : 'sass-loader', options : { sourceMap : true} },
                ]
            }
        ]
    },    
    output : {
        filename : './[name].bundle.js',
    }
});