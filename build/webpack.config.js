const path = require('path');

module.exports = {
	entry: './src/index.js',
	devServer: {
		static: './eldritch-codejam',
	},
	output: {
		filename: 'builde.js',
		path: path.resolve(__dirname, 'eldritch-codejam'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		runtimeChunk: 'single',
	},
};