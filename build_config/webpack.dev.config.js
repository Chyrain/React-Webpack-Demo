// webpack.dev.config.js
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const { manifest, APP_PATH, BUILD_PATH, config } = require('./webpack.base.config.js');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //分离CSS和JS文件

const env = 'development';
module.exports = merge(config(env), {
	//配置生成Source Maps，选择合适的选项("source-map|cheap-module-source-map|eval-source-map|cheap-module-eval-source-map")
	devtool: 'eval-source-map', 
	entry: {
		webpack: ['webpack-dev-server/client?http://0.0.0.0:8080',
				  'webpack/hot/only-dev-server'],
		index: path.resolve(APP_PATH, 'index.jsx')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(env)
			}
		}),
		// 此插件不支持热加载,d
		// new ExtractTextPlugin({
		// 	filename: '[name].css',
		// 	disable: false,
		// 	allChunks: true
		// }),
		new HtmlwebpackPlugin({
			template: path.resolve(__dirname, './index.tpl.html'),
			filename: 'index.html',
			inject: 'body',
			showErrors: true,
			hash: false,
			dll: `./lib/${manifest.name}.js`
		}),
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		}),
		// --hot 重复
		// new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		contentBase: BUILD_PATH
	}
});