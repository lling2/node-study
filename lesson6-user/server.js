    const http = require("http");
    const querystring = require("querystring");
    const urlBLI = require("url");
    const fs = require("fs");
    
    var users={};
    var server = http.createServer(function(req,res){
        // get请求传入的数据
        var obj = urlBLI.parse(req.url,true);

        var GET = obj.query;
        var url = obj.pathname;

        // post请求传入的数据
        var str = '';
        req.on("data",function(data){
            str+=data;
        })
        req.on("end",function(){
            var post = querystring.parse(str);
            
            // 读取文件
            
            // 区分文件还是接口
            if(url=='/user'){
                // 接口
                switch(GET.act){
                    // 是注册页面
                    case 'reg':
                        // 检查用户名字是否存在
                        if(users[GET.user]){
                            res.write('{"ok":false,"msg":"此用户存在"}');
                        }else{
                            // 插入users
                            users[GET.user]=GET.pass;
                            res.write('{"ok":true,"msg":"此用户注册成功"}');
                        }
                        break;
                    //是登录页面
                    case 'login':
                        // 检查用户名字是否存在
                        if(users[GET.user]){
                            res.write('{"ok":false,"msg":"此用户存在"}');
                        }
                        else if(users[GET.user]!=GET.pass){
                            // 检查用户密码是否正确
                            res.write('{"ok":false,"msg":"此用户密码错误"}');
                        }else{
                            res.write('{"ok":true,"msg":"登录成功"}');
                        }
                        break;
                    default:
                        res.write('{"ok":false,"msg":"不存在"}');
                }
                res.end();
            }else{
                var file_name = './www'+url;
                fs.readFile(file_name,function(err,data){
                    if(err){
                        res.write("404");
                    }else{
                        res.write(data);
                    }
                    res.end();
                })
            }
            console.log('get',GET,"post",post,url)
        })   
    })
    server.listen(8282);