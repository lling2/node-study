const express = require("express");

var server = express();

server.use('/',function(req,res){
    // 如何向浏览器发送cookie
    // 值为' ',' '类型
    res.cookie('user','cookie')
    // 时间以秒为单位
    // res.cookie('user','cookie',{path:'',maxAge:30*24*3600**1000})
    res.send("ok");
})
server.listen(8282);