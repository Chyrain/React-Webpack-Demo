const webpack = require('webpack');
const path = require("path");

const ROOT_PATH = path.resolve(__dirname, '../');
const CONFIG_PATH = path.resolve(ROOT_PATH, './build_config'); // 配置文件目录
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); // 编译输出目录

const vendors = [
  'react',
  'react-dom',
  // 'react-redux',
  'prop-types',
  'redux'
];

module.exports = {
  output: {
    path: path.resolve(BUILD_PATH, 'lib'),
    filename: '[name]_[chunkhash:16].js',
    library: '[name]_[chunkhash:16]',
  },
  entry: {
    dll: vendors,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.DllPlugin({
      path: path.resolve(CONFIG_PATH, './manifest.json'),
      name: '[name]_[chunkhash:16]',
      context: __dirname,
    }),
    //压缩代码,命令行的 webpack -p 会默认使用这个插件压缩代码
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      minimize: true,
      sourceMap: true,
      output: {comments: false}
    })
  ]
};