var webpack = require('webpack');

module.exports = {
    entry: [__dirname + '/app/app.js', 'webpack-hot-middleware/client'],
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                test: /\.jsx?$/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    target: 'web'
}