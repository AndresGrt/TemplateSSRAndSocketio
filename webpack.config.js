const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry: {
        bundle: path.join(__dirname, 'src', 'client', 'index.jsx'),
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist', 'static'),
        filename: '[name].js',
        assetModuleFilename: 'assets/[name][ext][query]'
    },
    
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    devtool: 'inline-source-map'
}