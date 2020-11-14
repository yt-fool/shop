const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode:"development",
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'  },
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader',
                  options: { presets: ['@babel/preset-env'] }}},                                                          
      {test: /\.css$/,use: [ 'style-loader','css-loader', ]},
      {test: /\.(png|svg|jpg|gif)$/,use: [ 'file-loader' ] }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};
