const http = require("http");

http.createServer(function(req,res){
    var str = '';
    var i = 0;
    // data表示有一段数据到达
    req.on("data",function(data){
        console.log((i++)+"次数");
        str+=data;
    })
    // end表示所有数据到达
    req.on("end",function(){
        console.log(str);
    })
    res.write("finished");
    res.end();
}).listen(8282);