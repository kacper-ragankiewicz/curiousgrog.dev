const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(ttf|eot|jpe?g|png|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        type: 'asset/resource',
      },
    ]
  },
    optimization: {
    splitChunks: { chunks: "all" }
  },
  resolve: {
        extensions: [".jsx", ".js", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
  ],
}