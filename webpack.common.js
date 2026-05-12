import path from "node:path";
import { fileURLToPath } from "node:url";
import htmlWebpackPlugin from "html-webpack-plugin";
import { watchFile } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        app: "./src/index.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "production",
        }),
    ],
    devServer: {
        watchFiles: ["./src/template.html"],
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|gif|jpeg|jpg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/i,
                type: "asset/source",
            },
        ],
    },
};

