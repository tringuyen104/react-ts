const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
              },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}