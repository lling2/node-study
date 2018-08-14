const fs = require('fs');
fs.writeFile('bb.txt','aa',function (err) {
    console.log(err);
})