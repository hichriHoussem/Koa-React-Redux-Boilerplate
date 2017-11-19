var webpack = require('webpack');

module.exports = {
  entry: [
    './app/src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:
      {
        presets:['react']
      }
    }]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  output: {
    path: __dirname + '/app/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app/build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
