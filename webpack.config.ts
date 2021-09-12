import type webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";

export const webpackConfig: webpack.Configuration = {
    mode: "production",
    entry: "./src/index.ts",
    target: "node",
    output: {
        path: path.join(__dirname, "_build"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "node_modules/node-notifier/vendor/snoreToast/snoretoast-x64.exe",
                    to: "../dist/snoretoast-x64.exe",
                    toType: "file"
                },
                {
                    from: "resources/bin/create-windowless-app-template-launcher.exe",
                    to: "../dist/create-windowless-app-template-launcher.exe",
                    toType: "file"
                }
            ]
        })
    ],
    devtool: "source-map"
};

export default webpackConfig;