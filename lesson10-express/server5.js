const express = require("express");
const bodyParser2 = require('./libs/module');

var server = express();
server.listen(8282);

// 利用链式制作中间件
// post方式
server.use(bodyParser2);
server.use('/',function(req,res){
    console.log(req.body);
})