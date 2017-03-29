//如何发送和接收数据
var http=require('http');
//加载url核心模块
var url=require('url');
//加载querystring核心模块
var qs=require('querystring');
var server =http.createServer();
//get和post的url地址可以是相同的
server.on('request',function(req,res){
  //通过url模块处理请求路径
   var obj=url.parse(req.url);
   //console.log(obj);
   //将字符串 例如 foo=123&bar=456 转化成对象
   var params=qs.parse(obj.query);
   console.log(params);
  //console.log(req.url);
   if(obj.pathname=="/getData"&&req.method=="GET"){

      res.end("hehe~~");
   }
  else  if(obj.pathname=="/getData"&&req.method=="POST"){

      res.end("hehe~~");
   }
})

server.listen(3000);