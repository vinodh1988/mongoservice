var assert = require('assert');
var chai=require('chai');
var countries=require('../schema/schema');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fidelity');


function greet(p){
    return "hello!!! "+p;
}

function greetcall(parameter,p){
   p(parameter);
}

describe('greet test', function(){
  it('greet length should be greater than 5',function(){
        chai.expect(greet('Naveen').length>5).to.equal(true);
  });


});

describe('aync greet test',function(){
    it('function should pass string',function(){
         greetcall('Rajesh',function(data){
             chai.expect(data).to.be.a("string");
             chai.expect(data).to.equal('Rajesh');
             
         })
    });

  })

describe('Mongo get should work',function(){
    it('length should be 232',function(done){
        countries.find({},function(err,data){
          chai.expect(data.length==232).to.equal(true);
          done();
        });
    })
})
