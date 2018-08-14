const express = require("express");
const expressStatic = require("express-static");

var server = express();
server.listen(8282);

// 接口
// 


// 利用expressStatic读取文件
server.use(expressStatic('./www'))