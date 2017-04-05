module.exports = {
  context: __dirname + '/public',
  entry: './app.js',
  output: {
    path: __dirname + '/public',
    filename: './bin/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ }
    ]
  }
};
