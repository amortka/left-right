var path = require('path');
var appPath = path.join(__dirname, 'app');
var distPath = path.join(__dirname, 'www');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    //context: __dirname + '/app',
    entry: [path.join(appPath, 'app.js')],
    output: {
        path: distPath,
        filename: 'app-bundle.js'
    },
    module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015'],
                  cacheDirectory: true
              }
          }, {
              test: /\.html$/,
              loader: 'html-loader'
          }, {
              test: /[\/]ionic\.js$/,
              loader: 'exports?ionic'
          }, {
              test: /\.json$/,
              loader: 'json'
          }, {
              test: /\.(png|jpg)$/,
              loader: 'file?name=img/[name].[ext]'
          }, {
              test: /\.css$/,
              loader: 'style!css'
          }, {
              test: /\.scss$/,
              loader: 'style!css!autoprefixer!sass'
          }, {
              test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
              loader: 'file?name=fonts/[name].[ext]'
          }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.scss', '.html'],
      root: [
          appPath,
          path.join(__dirname, 'node_modules')
      ],
      moduleDirectories: [
          'node_modules'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'myApp',
        template: path.join(appPath, 'index.html'),
        inject: true,
        hash: true
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;
