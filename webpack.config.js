module.exports = {
  entry: './src/js/main.jsx',
  output: {
    path: './src/build',
    publicPath: 'build/',
    filename: 'main.js'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, loader: 'babel-loader' },
    ]
  }
};
