// const urlLIB = require("url");

// var obj = urlLIB.parse("http://www.baidu.com/index?name=aa&age=9",true);
// console.log(obj.pathname);
// console.log(obj.query);


const urlBLI = require('url');
const http = require("http");
http.createServer(function (req,res) {

    var GET = urlBLI.parse(req.url,true);
    console.log(GET.query);
    // 向前台返回数据
    res.write("finished");
    res.end();
}).listen(8282);