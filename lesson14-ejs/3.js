const ejs = require("ejs");

ejs.renderFile('./views/3.ejs',{name:'alice'},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})