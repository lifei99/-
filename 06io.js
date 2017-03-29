var fs=require('fs');
//判断路径是否正确

fs.readFile('./02server.js',function(err,data){
      fs.access('./02asdfasfserver.js',function(err){
        if(err){
          console.log(err);
        }
        else{
          console.log("路径正确");
        }
      })
       console.log("读文件~~~");
})
