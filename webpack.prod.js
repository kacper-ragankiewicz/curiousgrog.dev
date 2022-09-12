const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
   module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
});