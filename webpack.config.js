const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  target: "web",
  // watch: true,
  entry: ["webpack/hot/dev-server", "./src/index.js"],
  // publicPath: "/public_html/",
  devServer: {
    // watchOptions: {
    //   ignored: "/node_modules/",
    // },
    static: {
      directory: path.join(__dirname, "public"),
    },
    // compress: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: path.resolve(__dirname, "dist") }],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
