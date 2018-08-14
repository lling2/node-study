const express = require("express");
var server = express();


// 共有三种方式来接收请求方法： get()、post()、use()
server.get('/',function(){
    console.log("get")
})
server.post('/',function(){
    console.log("post")
})
server.use('/',function(){
    console.log("use")
})

server.listen(8282);