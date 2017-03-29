var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (req, res) {
  console.log(req.url);
  //编写的网站逻辑
  //返回index页面
  if (req.url == "/"&&req.method=="GET") {
    //读文件
    fs.readFile("./static/index.html",function (err, data) {
      res.end(data);
    })
  }
  //返回jquery.js文件
  else if (req.url == "/jquery.js"&&req.method=="GET") {
    fs.readFile("./static/jquery.js",function (err, data) {
      res.end(data);
    })
  }
  //接收ajax的get请求返回json数据
  else if (req.url == "/getData"&&req.method=="GET") {
    var data={"success":true};
      res.end(JSON.stringify(data));
  }
  //接收ajax的post请求返回json数据
   else if (req.url == "/getData"&&req.method=="POST") {
    var data={"success":"囧~~~"};
      res.end(JSON.stringify(data));
  }
})
server.listen(3000);