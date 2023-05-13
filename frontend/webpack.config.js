const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: {
        main: './main.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }
        ]})
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ] 
    }
}
