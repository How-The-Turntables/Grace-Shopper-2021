module.exports = {
  mode: 'development',
  entry: ['./client/index.js'],
  output: {
    path: __dirname,
    filename: './server/public/bundle.js',
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
