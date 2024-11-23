# 11、Webpack
## 11-1 原生Webpack的html-webpack-plugin配置js,css
index.html代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title><%= htmlWebpackPlugin.options.title %></title>
       <% for (var i in htmlWebpackPlugin.options.css) { %>
        <link rel="stylesheet" type="text/css" href="<%= htmlWebpackPlugin.options.css[i] %>">
   
<% } %>
</head>
<body>
    <div id="#app"></div>
    <% for (var i in htmlWebpackPlugin.options.js) { %>
    <script type="text/javascript" src="<%= htmlWebpackPlugin.options.js[i] %>"></script>
<% } %>
</body>
</html>
```
webpack.config.js 配置
```js
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  mode: "production", //根据环境自行配置
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // 热部署
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Meat.Qing",
      template: "index.html",
      inject: true, //注入关键
      js: ["https://unpkg.com/react@17.0.1/umd/react.production.min.js"], //从外部导入js
      css: ["https://unpkg.com/antd@4.14.0/dist/antd.min.css"], //从外部导入css
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
```
