var express= require('express');
var route=express.Router();
var countries=require('../schema/schema');

route.get("/getall",function(request,response){
    countries.find({},{_id:0},function(err,data){
        console.log("Data processed....!!!")
     if(err){
         response.status=500;
         response.send("Data not found");
     }
     else{
         response.status=200;
         response.json(data);
     }
    });
});

route.put("/update/:code",function(request,response){
    let code=request.params.code;
    let country=request.body;
     countries.update({country_code:code},{$set:request.body},
        function(err,data){
            console.log("Data processed....!!!")
        if(err){
            response.state=500;
            response.send("not updated...");
        }
        else{
            response.state=200;
            response.json({"status":"success"});
        }
     });
    
});

module.exports=route;