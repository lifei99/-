//引入exporess包
var express = require('express');

var path = require('path');
//创建一个服务器实例
var app = express();
//使用一个express里面的插件将一个路径静态化，将这个路径变成静态文件服务器的根目录
//static帮我们去处理了静态文件，变成了静态网站
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000);

//module.exports = app;
