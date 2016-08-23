var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var fontMagician = require('postcss-font-magician');
var path         = require('path');

const data = {
  routes: [
    '/',
    '/quisuisje',
    '/consultations',
    '/approches',
    '/articles',
    '/contact',
    '/articles/illusion-incompetence'
  ]
};

module.exports = {
  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: './dist/',
    libraryTarget: 'umd'
  },

  resolve: {
    modulesDirectories: ['node_modules', 'src', 'assets']
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.md$/, loader: 'babel!reactdown/webpack', exclude: /node_modules/ },
      { test: /\.png|jpg$/, loader: 'file?name=assets/images/[name].[ext]'},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?modules!sass')},
      { test: /\.css$/, include: path.resolve(__dirname, 'assets'), loader: ExtractTextPlugin.extract('css!postcss')},
      { test: /\.css$/, include: path.resolve(__dirname, 'src/components'), loader: ExtractTextPlugin.extract('css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss')}
    ]
  },
  postcss: function (webpack) {
    return [
      precss, 
      autoprefixer, 
      fontMagician(),
      require('postcss-color-function')()
    ];
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ]
}