module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  },
  entry: './assets/js/script.js',
  output: {
    filename: 'script.js'
  }
}