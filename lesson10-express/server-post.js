const express = require("express");
const bodyParser = require("body-parser");

var server = express();
server.listen(8281);

server.use(bodyParser.urlencoded({
    extended: false,
    limit: 2*1024*1024 //2g
}));//有两个参数 extended,limit

server.use('/',function(req,res){
    console.log(req.body);//get类型
    res.send("ok");
    res.end();
})