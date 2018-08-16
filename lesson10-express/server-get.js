const express = require("express");

var server = express();
server.listen(8281);

server.use('/',function(req,res){
    console.log(req.query);//get类型
    res.send("ok");
    res.end();
})