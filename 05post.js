//如何发送和接收数据
var http=require('http');
var url=require('url');
var server =http.createServer();
server.on('request',function(req,res){
   var obj=url.parse(req.url,true);
   if(obj.pathname=="/getData"&&req.method=="GET"){

      res.end("hehe~~");
   }
  else  if(obj.pathname=="/getData"&&req.method=="POST"){
    //接收body里面的数据
      var data="";
      //监听data事件，获取到报文体里面的数据块
      req.on('data',function(chunk){
          data+=chunk;
      })
      //通过监听end事件，得到结束的时间点
      req.on('end',function(){
         console.log(data);
         res.end("hehe~~");
      })

   }
})

server.listen(3000);