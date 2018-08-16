// 读取并校验cookie
const express = require("express");
const cookieParser = require("cookie-parser");

var server = express();
server.use(cookieParser("xsdfvvv"));

server.use('/',function(req,res){
    req.secret = 'xsdfvvv';
    res.cookie('user','name',{signed:true})

    console.log('No签名',req.cookies);
    console.log('签名',req.signedCookies);
    res.send("ok")
})

server.listen(8282);