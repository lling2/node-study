const express = require("express");
const cookieParser = require("cookie-parser");

var server = express();


// 如何读取cookie 利用中间件cookieParser
server.use(cookieParser());

server.use('/',function(req,res){
    console.log(req.cookies);//获取cookie值
    res.send("ok")
})
server.listen(8282);