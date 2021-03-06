process.env.NODE_ENV = 'production';

module.exports = {
	entry: __dirname + '/app/app.js',
	output: {
		path: __dirname + "../blammo-api/public",
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				test: /\.jsx?$/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
}