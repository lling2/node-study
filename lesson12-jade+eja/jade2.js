// 利用jade.renderFile('',{pretty:true})直接访问jade文件,并且渲染
const jade = require("jade");

var str = jade.renderFile('./view/2.jade',{pretty:true})
console.log(str);