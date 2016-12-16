var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ['./src/index.jsx', 'webpack-hot-middleware/client'],
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Codenames',
      template: 'src/helpers/template.ejs',
    })
  ],
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
