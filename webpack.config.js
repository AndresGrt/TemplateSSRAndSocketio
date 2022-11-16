const path = require('path');

module.exports = {
    mode: 'development',

    context: path.resolve(__dirname, 'src/client'),

    entry: {
        app: './index.jsx',
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist/static'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.jsx/,
                loader: "babel-loader",
                exclude:/node_modules/,
            }
        ],
    },

    devtool: 'inline-source-map'
}