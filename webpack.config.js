const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PORT=process.env.PORT || 3000;
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: { publicPath: "" },
                },
                    "css-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: path.join(__dirname, 'src','assets', 'ico.png'),

        }),
        new MiniCssExtractPlugin()

    ],
    devServer: {
        hot: true,
        static: path.resolve(__dirname, 'dist'),
        port: PORT,
        open: true,
    },
    mode: 'development',
};
