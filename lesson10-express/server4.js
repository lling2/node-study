const express = require("express");
const queryString = require("queryString");

var server = express();
server.listen(8282);

// 利用链式制作中间件
// post方式
server.use(function(req,res,next){
    var str = '';
    req.on("data",function(data){
        str += data;
    })
    req.on("end",function(){
        req.body = queryString.parse(str);
        next();
    })
})
server.use('/',function(req,res){
    console.log(req.body);
    res.send("ok");
    res.end();
})