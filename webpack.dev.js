const webpack = require('webpack');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = env =>
    merge(common, {
        mode: "development",
        devtool: 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            static: './dist',
        },
        watchOptions: {
            poll: true,
        },
        stats: "minimal",
        plugins: [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("development"),
            }),
        ],
    });
