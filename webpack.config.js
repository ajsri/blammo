var webpack = require("webpack");

module.exports = {
    entry: [__dirname + "/app/app.js", "webpack-hot-middleware/client"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "react-hmre"]
                }
            }
        ]
    }
}

