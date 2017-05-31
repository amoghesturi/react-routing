var path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'app'),
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  }
}
