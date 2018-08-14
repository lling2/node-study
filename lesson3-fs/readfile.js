const fs = require('fs');
fs.readFile('aa.txt',function (err,data) {
    if(!err){
        console.log(data);//<Buffer 61 61 61 61 61 0d 0a 73 73 73 73 73 73 73 73 0d 0a 73 73 64 64 64 64 64 64>
        console.log(data.toString());
    }
})