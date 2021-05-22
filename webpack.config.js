const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: 'public/index.html',
});
module.exports = {
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  entry: resolve('./src/client/index.jsx'),
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlPlugin],
};
