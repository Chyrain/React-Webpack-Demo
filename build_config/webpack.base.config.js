// webpack.base.config.js
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //分离CSS和JS文件

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src'); // 所有源文件所在top路径
const APP_PATH = path.resolve(SRC_PATH, 'app'); // 具体应用业务源代码目录
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); // 编译输出目录

// const isDebug = process.env.NODE_ENV !== '"production"';
const manifest = require('./manifest.json');

function isDebug(env) {
	return env === 'development';
}

module.exports = {
	manifest,
	ROOT_PATH,
	SRC_PATH,
	APP_PATH,
	BUILD_PATH
};

module.exports.config = (env) => { 
	return {
		//配置生成Source Maps，选择合适的选项("source-map|cheap-module-source-map|eval-source-map|cheap-module-eval-source-map")
		// devtool: 'source-map', 
		entry: {
			index: path.resolve(APP_PATH, 'index.jsx')
		},
		output: {
			path: path.resolve(BUILD_PATH, './app'), //打包后的文件存放的地方
			chunkFilename: isDebug(env) ? '[id].chunk.js' : '[chunkhash].[id].chunk.js',
			filename: isDebug(env) ? '[name].js' : '[name]_[chunkhash:10].js' //打包后输出文件的文件名
		},
		resolve: {
			extensions: ['.js', '.jsx', '.scss', '.css']
		},
		module: {
			rules: [
				{
					test: /\.js[x]?$/,
					include: [
						APP_PATH //important for performance!
					],
					loader: 'babel-loader'
				},
				{
					test: /\.(styl|scss|css)$/,
					include: [
						APP_PATH //important for performance!
					],
					use: false ?
						[
							{ loader: 'style-loader' },
							{ loader: 'css-loader' },
							{
								loader: 'postcss-loader',
								options: { // 如果没有options这个选项将会报错 No PostCSS Config found
									plugins: (loader) => [
										require('autoprefixer')(), //CSS浏览器兼容
									]
								}
							},
							{
								loader: 'sass-loader', 
								options: {
									minimize: !isDebug(env),
									sourceMap: false
								}
							}
						]
						: ExtractTextPlugin.extract({
							//fallback: 'style-loader',
							use: [
								{ 
									loader: 'css-loader',
									options: {
										minimize: !isDebug(env),
										sourceMap: false
									}
								},
								{
									loader: 'postcss-loader',
									options: { // 如果没有options这个选项将会报错 No PostCSS Config found
										plugins: (loader) => [
											require('autoprefixer')(), //CSS浏览器兼容
										]
									}
								},
								{
									loader: 'sass-loader',
									options: {
										minimize: !isDebug(env),
										sourceMap: false
									}
								}
							],
							publicPath: './'
						})
				},
				{
					test: /\.(png|gif|jpe?g|svg)$/i,
					include: [
						path.resolve(APP_PATH, './assets/img')
					],
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 4000,
								name: 'assets/img/[name]_[hash:10].[ext]'
							}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								optipng: {
									optimizationLevel: 7
								},
								gifsicle:{
									interlaced: false
								},
								pngquant: {
									quality: '65-90',
									speed: 4
								},
								mozjpeg: {
									progressive: true,
									quality: 65
								},
								// // Specifying webp here will create a WEBP version of your JPG/PNG images
								// webp: {
								// 	quality: 75
								// }
							}
						}
					]
				},
				{
					test: /\.(woff|woff2|svg|eot|ttf)$/i,
					include: [
						path.resolve(APP_PATH, './assets/fonts')
					],
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 1,
								name: 'assets/fonts/[name]_[hash:10].[ext]'
							}
						}
					]
				}
			]
		},
		plugins: [
			new webpack.DllReferencePlugin({
				context: __dirname,
				manifest: manifest
			})
		]
	}
}