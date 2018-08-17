const jade = require("jade");
const fs = require("fs");

var str = jade.renderFile("./views/index.jade",{pretty:true})
// 会自动将str的值放入index.html中，没有这个文件则新建
fs.writeFile('./build/index.html',str,function (err,data) {
    if(err){
        console.log("错误")
    }else{
        console.log("成功")
    }  
})