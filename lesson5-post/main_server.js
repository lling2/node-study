
    const http = require("http");
    const querystring = require("querystring");
    const urlBLI = require("url");
    const fs = require("fs");
    
    var server = http.createServer(function(req,res){
        // get请求传入的数据
        var obj = urlBLI.parse(req.url,true);

        var get = obj.query;
        var url = obj.pathname;

        // post请求传入的数据
        var str = '';
        req.on("data",function(data){
            str+=data;
        })
        req.on("end",function(){
            var post = querystring.parse(str);
            
            // 读取文件
            // console.log(url);
            var file_name = './www'+url;
            fs.readFile(file_name,function(err,data){
                if(err){
                    res.write("404");
                }else{
                    res.write(data);
                }
                res.end();
            })



            console.log('get',get,"post",post,url)
        })   
    })
    server.listen(8282);