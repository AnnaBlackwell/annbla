module.exports = {

  entry: './src/index.js',
  output: {
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
    ]
  }
}
