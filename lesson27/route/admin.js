const express = require("express");
module.exports = function(){
    var router = express.Router();

    //检查登录状态
    router.use((res,req,next)=>{
        if(!req.session["admin_id"]&&req.url!='/login'){
            res.redirect('admin/login');//重定向返回登录
        }else{
            next();
        }
    })
    router.get('/login',(req,res)=>{
        res.render('admin/login.ejs',{});
    })
    // router.get("/",(req,res)=>{
    //     res.send("admin").end();
    // })
    return router;
}