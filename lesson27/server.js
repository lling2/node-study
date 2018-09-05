const express = require("express");
const static = require("express-static");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const consolidate = require("consolidate");
const expressRoute = require("express-route");
const multer = require("multer");
const multerObj = multer({dest: './static/upload'})

var server = express();
server.listen(8281);

// 1、请求数据
// get自带query
server.use(multerObj.any())//表示可以上传任何类型的文件

// 2、cookie、session
server.use(cookieParser());
var keys = [];
for(var i = 0;i<1000;i++){
    keys[i]='a_'+Math.random();
}
server.use(cookieSession({
    name: 'sess_id',
    keys: keys,
    maxAge: 20*60*1000
}))

// 3、模板
server.engine('html',consolidate.ejs);
server.set('views','template');
server.set('view engine','html');

// 4、route
server.use("/",require("./route/web.js")())
server.use('/admin',require('./route/admin.js')());

// server.use('/',create());
server.use('/admin/',require("./route/admin.js")());
server.use('/',require("./route/web.js")());

// 5 default、static
server.use(static('./static/'));