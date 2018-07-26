var path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname,'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.coffee$/,
                loader: 'coffee-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        port: 9000
    }
}