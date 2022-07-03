const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve('./src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        use: ['@svgr/webpack']
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ],
  devServer: {
    hot: true,
    port: 9214,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
  }
};
