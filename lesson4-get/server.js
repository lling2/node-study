const http = require("http");
http.createServer(function (req,res) {
    var GET = {};
    // req获取前台请求的数据
    // console.log(req.url);//   /aaa?user=alice&pass=111
    //但是我们需要的结构是{user:alice,pass:111};
    // 首先去掉aaa?，只要后面的 利用split
    if(req.url.indexOf('?')!=-1){
        var arr1 = req.url.split("?");
        var url = arr1[0];
        var arr2 = arr1[1].split("&");

        for(var i = 0;i<arr2.length;i++){
            var arr3 = arr2[i].split("=");
            GET[arr3[0]]=arr3[1];
        }
    }else{
        var url = req.url;
    }
    console.log(url,GET);
    // 向前台返回数据
    res.write("finished");
    res.end();
}).listen(8282);