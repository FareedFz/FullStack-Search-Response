var express=require('express')
var app=express();
var router = require('./router');
let port=6200;
app.all('*',router)
             app.listen(port, () => {
                console.log(`Running Successfully`);
                  })
   
             
                  
        
module.exports=app;