const express = require("express");
const expressStatic = require("express-static");

var server = express();
server.listen(8282);

// expressStatic(a)是个函数 a表示目录 表示去a路径里面去读
// expressStatic他表示读取静态文件
server.use(expressStatic('./www'));