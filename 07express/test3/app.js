var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//凡是app.use的就是中间件
//顺序执行，如果执行完成需要执行下一个中间件next
//如果不需要网下执行了 res.send
app.use(function(req,res,next){
   console.log("继续处理请求~~1");
   next();
})
app.use(function(req,res,next){
   console.log("继续处理请求~~2");
   res.send("返回了~~~呵呵~~~~")
})


app.listen(3000);
//module.exports = app;
