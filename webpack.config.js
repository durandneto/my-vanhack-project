const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
//var Compress = require('compress')
var CompressionPlugin = require('compression-webpack-plugin');

const componentsPath =
  path.resolve(__dirname, './node_modules/ComponentsOi/src/index.js')
const StylPath = path.resolve(__dirname,'app','vmlbrasil','components','src','components')


//write analyser, open browser analyser
const BundleAnalyzerPlugin =
          require('webpack-bundle-analyzer')
                          .BundleAnalyzerPlugin;

var DEBUG = !(process.env.NODE_ENV === 'production')

if (DEBUG) {
  require('dotenv').config()
}

var config = {
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  entry: {
    app: [
      './app/app'
    ],
    vendor: [
      'react',
      'react-router',
      'redux',
      'react-dom',
      'lodash',
      'bluebird',
      'humps',
      'history'
    ]
  },
  resolve: {
    modules: [ path.join(__dirname, 'app'), 'node_modules'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_BASE_URL']),
    new CompressionPlugin({
        test: /\.js$/,
        asset: '[path].gz',
        algorithm: 'gzip',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|eot|woff|ttf)$/, loader: 'ignore-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules&importLoaders=1'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }
    ]
  }
}


if (DEBUG) {
  config.entry.app.push('webpack-hot-middleware/client?path=/__webpack_hmr')

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filname: 'vendor.js'
    })
  ])
  config.output.publicPath = '/'
} else {
  new webpack.EnvironmentPlugin({
  NODE_ENV: 'production',
  DEBUG: false
})
  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filname: '[name].[chunkhash].js'
    }),

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      comments: false, // remove comments
      compress: {
          warnings: false, // Suppress uglification warnings
          pure_getters: true,
          conditionals: true,
          sequences: true,
          dead_code: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true
      },
      mangle: false,
      sourceMap: true, /* fix issue on uglify */
      output: {comments: false}
    }),
    new BundleAnalyzerPlugin()
  ])
}

module.exports = config
