const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');
process.env.NODE_ENV='development';
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
      {test:/\.js$/, exclude: /node_modules/,enforce:'pre',loader:'eslint-loader',options:{fix:true}},                 //js语法检查（airbnb规范）
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader',options: { presets: ['@babel/preset-env',{useBuiltlns:'usage',corejs:{version:3}}] }}},      //js兼容性处理                                                   
      {test: /\.css$/,use: [ 'MiniCssExtractPlugin-loader','css-loader', {loader:'postcss-loader',options:{ident:'postcss',plugins:()=>[require('postcss-preset-env')()]}}]},        //打包css资源
      {test: /\.(png|jpg)$/,loader:  'url-loader',options:{limit:8*1024,name:'[hash:10].[ext]',outputPath:'imgs',esModule:false} }, //打包样式中图片资源
      {exclude: /\.(png|jpg|vue|js|css|html)$/,loader: 'file-loader',options:{outputPath:'media'} },      //打包处理其它资源
      {test: /\.html$/,loader:'html-loader'},   //打包html中的图片资源
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),                            //css压缩
    new HtmlWebpackPlugin({template:'./dist/index.html',minify:{collapseWhitespace:true,removeComments:true}}),         //处理html
    new MiniCssExtractPlugin({                                   //分离css
      filename:'css/bundle.css'
    })
  ],
  devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         compress:true,
         port:3000,
         open:true
     },
};
