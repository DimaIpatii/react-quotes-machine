const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Randome Quote Machine",
      filename: "index.html",
      template: "src/index.html",
      inject: "head",
      scriptLoading: "defer",
    }),
    new webpack.ProgressPlugin(),
    new ESLintPlugin({
        overrideConfigFile: path.resolve(__dirname, '.eslintrc.json'),
        context: path.resolve(__dirname, '../src'),
        files: ['**/*.js',"**/*.jsx"],
        extensions: [".js", ".jsx"]
    }),
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
};
