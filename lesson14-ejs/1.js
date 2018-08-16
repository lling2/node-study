const ejs = require("ejs");

ejs.renderFile('./views/1.ejs',{name:'alice'},function(err,data){
    if(err){
        console.log("mistakes");
    }else{
        console.log(data);
    }
})