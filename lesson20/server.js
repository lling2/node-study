const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
// const jade = require("jade");
// const ejs = require("ejs");
const consolidate = require("consolidate");
const multer = require("multer");
const mysql = require("mysql");
const common = require('./libs/common');

const db = mysql.createPool({host:'localhost',user:'root',password:'1022',database:'blog'})
var server = express();
server.listen(8281);


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

//用户请求
// server.use('/',function(req,res,next){
//     console.log(req.query,req.body,req.files,req.cookies,req.session);
// })

// 4、配置模板引擎
    // 4.1模板引擎放在哪里？
    server.set('views','./template');
    // 4.2哪种模板引擎
    server.engine('html',consolidate.ejs);
    // 4.3输出什么东西
    server.set('view engine','html')

// 接收用户需求
server.get('/',(req,res,next)=>{
    // 查询banner里面的东西 利用链式操作
    db.query("SELECT * FROM `banner_table`",(err,data)=>{
        if(err){
            res.status(500).send('err').end();
        }else{
            // 现在不急渲染 利用next将数据传到下面的环节
            // res.render('index.ejs',{banners:data}); 
            res.banners = data;
            next();
        }
    })
})
server.get('/',(req,res,next)=>{
    // 查询文章列表
    db.query("SELECT title,summary,ID FROM `article_table`",(err,data)=>{
        if(err){
            res.status(500).send("err").end();
        }else{
            res.articles = data;
            next();
        }
    })
})
server.get('/',(req,res)=>{
    // 将数据渲染到前台
    res.render('index.ejs',{banners:res.banners,articles:res.articles});
})

server.get('/article',(req,res)=>{
    // 进入article页面
    // 查询article数据库
    db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
        if(err){
            res.status(500).send("数据库存在问题").end();
        }else{
            if(data.length==0){
                res.status(404).send("你请求的文章不存在").end();
            }else{
                var articleData = data[0];
                articleData.sDate = common.time2date(articleData.post_time);
                articleData.content = articleData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                res.render('conText.ejs',{article_data:articleData});
                // console.log(articleData.sDate);
            }
        }
    })
})

// 4、static数据
server.use(static('./www'))