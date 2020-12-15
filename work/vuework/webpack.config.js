const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const optimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');
module.exports = {
    mode:"production",
    entry: './src/index.js',
    output: {
      filename: 'js/bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {test: /\.vue$/, loader: 'vue-loader'  },         //打包vue单文件组件资源
        { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader',options: {"presets": [
          ["@babel/preset-env", {
          "useBuiltIns": "usage",
          "corejs": "3",
          "targets": {
            "chrome": "60",
            "firefox": "60",
            "ie": "9",
            "safari": "10",
            "edge": "17"
          }
        }]
        ]}}},    
        {test: /\.css$/,use: [ 'style-loader','css-loader', ]},        //打包css资源
        {exclude: /\.(png|jpg|vue|js|css|html)$/,loader: 'file-loader',options:{outputPath:'media'} },      //打包处理其它资源
        {test: /\.(png|jpg)$/,loader:  'url-loader',options:{limit:8*1024,name:'[hash:10].[ext]',esModule:false,outputPath:'imgs'} }, //打包样式中图片资源
        {test: /\.html$/,loader:'html-loader'},   //打包html中的图片资源
       
    ]
},
plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({template:'./src/index.html'}),         //处理html
    new optimizeCssAssetsWebpackPlugin(),
  ],
  devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         compress:true,
         port:3000,
         open:true
     },
};
