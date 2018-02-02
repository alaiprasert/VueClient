const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  // entry: './src/index.js',
  // entry: {
  //   app: './src/index.js',
  //     vendors: './src/vendors.js'
  // }
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src'), // white-list app source files
            require.resolve("bootstrap-vue") // white-list bootstrap-vue
          ]
        }, {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=1024'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './index.html'})
    ]
  };
  switch (env) {
    case 'test':
      console.log("******************** TEST ********************");
      break;
    case 'prod':
      console.log("******************** PROD ********************");
      config.plugins.push(new webpack.optimize.UglifyJsPlugin());
      break;
    default:
      console.log("******************** DEV ********************");
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
      config.plugins.push(new webpack.NamedModulesPlugin()); //HMR shows correct file names in console on update.
      config.devServer =  {
        // contentBase: './dist',
        hot: true
      };
      break;
  }

  return config;
};
