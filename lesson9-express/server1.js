const express = require("express");
var server = express();


// 如何利用express处理响应请求
server.use('/abc.html',function(req,res){
    res.send({a:1,s:2});// 相当于之前的res.write();
    res.end();
})

server.listen(8282);