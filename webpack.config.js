var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var SitemapPlugin = require('sitemap-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var fontMagician = require('postcss-font-magician');
var OfflinePlugin = require('offline-plugin');
var path         = require('path');

var production = process.env.NODE_ENV === 'production';

const data = {
  routes: [
    '/',
    '/quisuisje/',
    '/psychologue/',
    '/diplomes/',
    '/experience-clinique/',
    '/experience-enseignement/',
    '/experience-recherche/',
    '/partenaires/',
    '/consultations/',
    '/enfant/',
    '/adolescent/',
    '/femme-enceinte/',
    '/parent/',
    '/autisme/',
    '/bilan/',
    '/articles/',
    '/cabinet/',
    '/contact/',
    '/referencement/',
    '/articles/illusion-incompetence/',
    '/articles/jeux-jouets-bebe/',
    '/articles/cloches-paques/',
    '/articles/bebe-me-dit-toujours-non/',
    '/articles/favoriser-developpement-psychomoteur-bebe/',
    '/articles/meditation-prenatale-influence-bien-etre-bebe/',
    '/articles/bebe-in-utero-emotion-maternelle/'
  ]
};

module.exports = {
  entry: [
    'file?name=robots.txt!./robots.txt',
    'file?name=manifest.json!./manifest.json',
    'file?name=CNAME!./CNAME',
    './src/entry.js'
  ],

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
      { test: /\.css$/, include: path.resolve(__dirname, 'node_modules/react-image-gallery'), loader: ExtractTextPlugin.extract('css')},
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
    new SitemapPlugin('https://www.abarthelemy-psychologue-toulouse.fr', data.routes),
    /*
    new OfflinePlugin({
      version: production ? Date.now().toString() : Date.now,
      updateStrategy: 'all',
      publicPath: '/',
      relativePaths: false
    }),
    */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ]
}