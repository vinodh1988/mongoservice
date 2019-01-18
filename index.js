var express=require('express');
var app=express();
var mroute=require('./routes/mroute');


var bodyParser=require('body-parser');
app.use(bodyParser.json());


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fidelity');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen("4004",function(){
    console.log("Server started @4004");
})

app.use("/countries",mroute);