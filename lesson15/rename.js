const fs = require("fs");

// 文件重命名
fs.rename('a.txt','b.txt',function(err){
    console.log(err);
})