const express = require('express');
module.exports = function(){
    var router = express.Router();
    router.get('/1.html',function(req,res){
        // res.render('./1.ejs',{a:1})
        res.send("aaa").end();
    })
    return router;
}