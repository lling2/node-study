const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,res){
    // 获取req.url
    var file_name = 'www'+req.url; 
    // 然后利用地址去www文件夹中去寻找
    fs.readFile(file_name,function(err,data){
        if(err){
            console.log('404');
        }else{
            res.write(data);
        }
        res.end();
    })
})
server.listen(8989);