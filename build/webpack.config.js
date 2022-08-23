const path = require('path');

module.exports = {
	entry: './src/index.js',
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
};