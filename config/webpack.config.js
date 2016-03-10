var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    preLoaders: [
           {
               test: /\.jsx?$/,
               exclude: /(node_modules|bower_components)/,
               include: path.resolve(__dirname, '../src'),
               loader: 'source-map'
           }
       ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.resolve(__dirname, '../src'),
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
