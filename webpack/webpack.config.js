
var config = {

	entry: "./js/main.js",

	output: {
		path: "./dist/",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	}
};

module.exports = config;