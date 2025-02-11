const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 

module.exports = {
    mode: "development",
    entry: "./src/js/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename:'[name][ext]'
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"], // Allow imports without file extensions
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, // Match .ts and .tsx files 
                exclude: /node_modules/, // Exclude node_modules 
                use: { 
                    loader: "babel-loader", // Use Babel loader to transpile TypeScript 
                    options: { 
                        presets: [ 
                            "@babel/preset-env", // Transpile modern JavaScript 
                            "@babel/preset-typescript", // Transpile TypeScript 
                        ], 
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
            template: path.resolve(__dirname, 'index.html'),
            title: 'Rock Paper Scissor'
        }),
    ],
    devServer: {
        static: "./dist",
        port: 8080,
        hot: true,
        open: true,
        compress: true, // Enable gzip compression
        historyApiFallback: true,
    },
};
