const express = require("express");
const common = require("../libs/common");
module.exports = function(){
    var router = express.Router();

    //检查登录状态
    router.use((res,req,next)=>{
        if(!req.session['admin_id']&&req.url!='/login'){
            res.redirect('admin/login');//重定向返回登录
        }else{
            next();
        }
    })

    router.use('/login',(req,res)=>{
        console.log(req.body);
        res.render('admin/login.ejs',{});
    })
    // router.get("/",(req,res)=>{
    //     res.send("admin").end();
    // })
    return router;
}