module.exports = {
  context: __dirname + '/src',
  entry:'./index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /.*\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
