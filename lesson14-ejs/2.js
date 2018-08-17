const ejs = require("ejs");

ejs.renderFile('./views/2.ejs',{},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})