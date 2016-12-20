var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var _ = require('underscore');

const plugins = {
  shared: [
    new HtmlWebpackPlugin({
      title: 'Codenames',
      template: 'src/helpers/template.ejs',
    })
  ],
  development: [],
  production: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
}

function getPlugins(env) {
  return _.flatten([plugins.shared, plugins[env]])
}

module.exports = {
  entry: process.env.NODE_ENV === 'production' ? './src/index.jsx' : ['./src/index.jsx', 'webpack-hot-middleware/client'],
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  plugins: getPlugins(process.env.NODE_ENV || 'development'),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
