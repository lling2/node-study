const express = require("express");

var server = express();
server.listen(8281);

server.use('/',function(req,res){
    console.log(req.query);
    res.send("ok");
    res.end();
})