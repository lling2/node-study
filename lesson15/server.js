const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
// const jade = require("jade");
// const ejs = require("ejs");
const consolidate = require("consolidate")
const multer = require("multer");

var server = express();
server.listen(8282);

// 1、解析cookie
server.use(cookieParser("asxnhjyxxxaw"))
// 2、使用session
var arr = [];
for(var i = 0;i<10000;i++){
    arr.push('Keys_'+Math.random());
}
server.use(cookieSession({name:'alice',keys:arr,maxAge:20*3600*1000}))
// 3、post数据
server.use(bodyParser.urlencoded({extended:false}))
server.use(multer({deset:'./www/load'}).any())

//用户请求
server.use('/',function(req,res,next){
    console.log(req.query,req.body,req.files,req.cookies,req.session);
})

// 4、配置模板引擎
// 4.1模板引擎放在哪里？
server.set('views','./views');
// 4.2哪种模板引擎
server.engine('html',consolidate.ejs);
// 4.3输出什么东西
server.set('view engine','html')

// 接收用户需求
server.get('/index',function(req,res){
    res.render('1.ejs',{name:'alice'})
}) 

// 4、static数据
server.use(static('./www'))