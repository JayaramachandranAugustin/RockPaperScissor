
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        port: 8080,
        hot: true,
        open: true,
        compress: true, // Enable gzip compression
        historyApiFallback: true, // Enables proper routing for SPAs
    },
};
