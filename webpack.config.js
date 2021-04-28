const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, './server/public'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
