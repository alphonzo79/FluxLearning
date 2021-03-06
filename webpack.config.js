module.exports = {
	entry: "./js/app.js",
	output: {
		path: __dirname + "/js",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css"},
    		{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
};