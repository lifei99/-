    var poster=require('http-poster');
    //发送get请求
    poster.get('http://www.baidu.com',function(err,res,data){ 
       console.log(res);
       console.log(data);
     });