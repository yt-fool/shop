const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
  mode:"development",
  entry: './js/index2.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'  },         //打包vue单文件组件资源
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader',options: { presets: ['@babel/preset-env',{useBuiltlns:'usage',corejs:{version:3}}]}}},                                                          
      {test: /\.css$/,use: [ 'style-loader','css-loader', ]},        //打包css资源
      {test: /\.(png|jpg)$/,loader:  'url-loader',options:{limit:8*1024,name:'[hash:10].[ext]',esModule:false} }, //打包样式中图片资源
      {exclude: /\.(png|jpg|vue|js|css|html)$/,loader: 'file-loader' },      //打包处理其它资源
      {test: /\.html$/,loader:'html-loader'},   //打包html中的图片资源
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({template:'./pubilc/index.html'}),         //处理html
  ],
  devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         compress:true,
         port:3000,
         open:true
     },
};
