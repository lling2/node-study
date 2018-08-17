const path = require('path');

var str = './www/dana/s.html';
var obj = path.parse(str);

// 注意：
// obj存在以下值
// dir: './www/dana',文件路径
// base: 's.html',文件名
// ext: '.html',扩展名
// name: 's'文件名部分
console.log(obj);