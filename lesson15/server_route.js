const express = require("express");

var server = express();

// login目录 /login/
var router1 = express.Router();
server.use("/login",router1);
router1.get('/1.html',function(req,res){
    res.send("login1")
})
router1.get('/2.html',function(req,res){
    res.send("login2")
})

// login目录 /login/
var router2 = express.Router();
server.use("/admin",router2);
router2.get('/1.html',function(req,res){
    res.send("admin1")
})
router2.get('/2.html',function(req,res){
    res.send("admin2")
})

server.listen(8282);
