const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser")
const fs = require("fs")
const pathLib = require("path")

var objMulter = multer({dest:'./www/upload'});
var server = express();

// 利用multer完成上传文件
server.use(objMulter.any());

server.post("/",function(req,res){
    // 获取原始文件扩展名
    // 重命名临时文件
    console.log(req.files);
    var newname = req.files[0].path + pathLib.parse(res.files[0].originalname).ext;
    fs.rename(req.files[0].path,newname,function(req,res){
        if(err){
            res.send("失败")
        }else{
            res.send("成功")
        }
    })
})
server.listen(8282);