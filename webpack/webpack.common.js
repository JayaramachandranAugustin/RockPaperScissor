const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"], // Allow imports without file extensions
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            filename: "index.html",
            title: "Rock Paper Scissor", // Ensures title is injected correctly
        }),
    ],
};
