let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'dist');
let APP_DIR = path.resolve(__dirname, 'src');

let config = {
  entry: {
    bundle: APP_DIR + '/app.js'
  },
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '.',
    port: 3000,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module : {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;
