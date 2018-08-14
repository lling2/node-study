const http = require('http');
var server = http.createServer(function(req,res){
    // console.log("aa")
    res.write("aaa");
    res.end();
})
// 监听--重要
// ()里面为端口号
server.listen(8989);