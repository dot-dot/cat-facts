var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
	  new webpack.DefinePlugin({
		'process.env': {
		  'NODE_ENV': JSON.stringify('production')
		}
	  })
  ],
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
