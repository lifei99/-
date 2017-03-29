//如何发送和接收数据
var http=require('http');
//加载url核心模块
var url=require('url');
var server =http.createServer();
//get和post的url地址可以是相同的
server.on('request',function(req,res){
  //通过url模块处理请求路径
  //url模块里面内置了querystring
  //第二个参数为true表示使用querystring去格式化参数
   var obj=url.parse(req.url,true);
   console.log(obj.query);
   if(obj.pathname=="/getData"&&req.method=="GET"){

      res.end("hehe~~");
   }
  else  if(obj.pathname=="/getData"&&req.method=="POST"){

      res.end("hehe~~");
   }
})

server.listen(3000);