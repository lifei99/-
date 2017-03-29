var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//路由处理数据交互的
app.get('/getMsg',function(req,res){
   res.send({success:true});
})
//post请求
app.post('/getMsg',function(req,res){
   res.send({success:true});
})
//模糊匹配news new 
// app.get('/news?',function(req,res){
//    res.send({success:"囧囧~~~~"});
// })
app.get('/new(ss)?',function(req,res){
   res.send({success:"keke~~~~~"});
})
//匹配一个或多个o
app.get('/go+gle',function(req,res){
   res.send({success:"呵呵~~~~~~~"});
})
//匹配fo + 任意字符 +o 包括匹配foo
app.get('/fo*o',function(req,res){
   res.send({success:"嘿嘿~~~~~~~"});
})
app.get('/news*',function(req,res){
   res.send({success:"嘿嘿~~~~~~~"});
})
//匹配正则表达式 注意正则不是string
app.get(/a/,function(req,res){
   res.send({success:"哈哈~~~~~~~"});
})

app.get(/.*fly$/,function(req,res){
   res.send({success:"嘎嘎~~~~~~~~"});
})

app.listen(3000);
//module.exports = app;
