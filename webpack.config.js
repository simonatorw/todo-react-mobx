const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const devConfig = {
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},	
	module: {
		rules: [	
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			}			
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},		
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',
		host: process.env.HOST,
		port: process.env.PORT,
		overlay: {
			errors: true,
			warnings: true
		}
	},
	plugins: [
		new HtmlWebpackPlugin()
	]	
};

module.exports = (env) => {
	console.log('env', env);
	if (env === 'production') {
		return prodConfig;
	} else if (env === 'development') {
		return devConfig;
	}
	
};