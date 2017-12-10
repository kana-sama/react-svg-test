const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  },

  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.svg$/, use: ["babel-loader", "react-svg-loader"] }
    ]
  },

  plugins: [new HtmlWebpackPlugin()]
};
