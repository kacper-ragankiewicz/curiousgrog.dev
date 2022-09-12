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
    });
