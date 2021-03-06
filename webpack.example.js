const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ["@babel/polyfill", path.join(__dirname, "examples/src/index.tsx")],
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: '**/*.yml', context: path.resolve(__dirname, 'examples', 'src') },
        { from: 'Gemfile', context: path.resolve(__dirname, 'examples', 'src') },
        { from: 'README.md' },
        { from: 'examples/src/_layouts', to: "_layouts" },
      ],
    }),
  ]
});