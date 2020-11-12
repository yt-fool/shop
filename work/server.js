const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');                               //导入系统模块
const fetch = require("node-fetch");                    //引入fetch模块
const mysql= require('mysql');                             //导入数据库模块
const post=3200;                                          //端口号
  function lj(connection){                                                   //建立数据库连接                  
    connection.connect(function(err) {
      if (err) {
        console.error('mysql连接失败 ' + err.stack);
        return;
      }     
    }); 
    }    
  const app=http.createServer();                                      //创建服务器
app.on('request',(req,res)=>{
    let pathname=url.parse(req.url).pathname;          //获取用户请求路径
    console.log(pathname);
    if(pathname=='/data'){                               //数据库访问
      let connection = mysql.createConnection({                //数据库设置
        host: 'localhost',  
        user: 'root',
        password : '875798202',
        database:'shop'
      });  
        lj(connection);
          let a=url.parse(req.url).query.split("=")[1].split("&&")[0];              //根据get参数判断要获取品类信息还是商品信息 
       let sql="null";
       if(a==1){                                                     //查询品类表 
         sql='SELECT * FROM type';                       
      }else if(a==2){                                                   //查询商品
        let b=url.parse(req.url).query.split("=")[2].split("&&")[0];
        let c=url.parse(req.url).query.split("=")[3];
        c=c==1?0:(c-1)*5;
        sql="select * from shop"+b+" limit 5 offset "+c;
      }else if(a==3){
        sql="select * from hot order by buynum desc limit 10";
      }  
      console.log(sql);                                                                                
  connection.query(sql,function (err,result) {
    connection.end(function(err) {
      if(err){
        console.log("数据库关闭失败："+err);
      }
    });
       if(err){
        console.log(err);
       }else{
       let jn=JSON.stringify(result);
       res.write(jn);                                                
       res.end();
       }
});
    }else{
    pathname=pathname=='/'?'/indexvue.html':pathname;
        let realpath=path.join(__dirname,'public'+pathname);
        fs.readFile(realpath,(error,result)=>{
            res.end(result);
        })   
      } 
});
app.listen(post);
console.log('服务器已启动，请访问localhost:'+post);
