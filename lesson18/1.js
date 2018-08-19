const mysql = require("mysql");

// 1、连接
// createConnection({host:'',user:'',password:'',database:''})
var db = mysql.createConnection({host:'localhost',user:'root',password:'1022',database:'20180818'})

// 2、查询
// .query('干什么',(err,data)=>{})
// 干什么必须用SQL语句完成
db.query("SELECT * FROM `user_table`;",(err,data)=>{
    if(err)
        console.log('错误',err);
    else
        console.log("成功");
        console.log(JSON.stringify(data));
})