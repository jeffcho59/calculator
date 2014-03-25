var expect = require("chai").expect;
var assert = require('chai').assert;
var should = require('chai').should();
var tags = require("../app.js");

describe("addition", function(){
   	it("should add positive numbers", function(){
   	   var x = 4;
   	   var y = 5;

       expect(x+y).to.equal(9);
   });
   
   it("should add a positive and negative number", function(){
   	   var x = 3;
   	   var y = -5;

       expect(x+y).to.equal(-2);
   });
   
   it("should add negative numbers", function(){
   	   var x = -1;
   	   var y = -5;

       expect(x+y).to.equal(-6);
   });
   
   it("should add a negative and positive number", function(){
   	   var x = -4;
   	   var y = 5;

       expect(x+y).to.equal(1);
   });
});


describe("subtraction", function(){
   	it("should substract positive numbers", function(){
   	   var x = 20;
   	   var y = 11;

       expect(x-y).to.equal(9);
   });
   
   it("should substract a negative and positive number", function(){
   	   var x = -6;
   	   var y = 7;

       expect(x-y).to.equal(-13);
   });
   
   it("should substract a positive and negative number", function(){
   	   var x = 3;
   	   var y = -3;

       expect(x-y).to.equal(6);
   });
   
   it("should substract negative numbers", function(){
   	   var x = -4;
   	   var y = -2;

       expect(x-y).to.equal(-2);
   });
});

describe("multiplication", function(){
   	it("should multiply positive numbers", function(){
   	   var x = 4;
   	   var y = 5;

       expect(x * y).to.equal(20);
   });
   
   it("should multiply negative numbers", function(){
   	   var x = -7;
   	   var y = -5;

       expect(x * y).to.equal(35);
   });
   
   it("should multiply positive and negative number", function(){
   	   var x = -2;
   	   var y = -6;

       expect(x * y).to.equal(12);
   });
   
});

describe("division", function(){
   	it("should divide positive numbers", function(){
   	   var x = 90;
   	   var y = 5;

       expect(x / y).to.equal(18);
   });
   
   it("should divide negative numbers", function(){
   	   var x = -20;
   	   var y = 5;

       expect(x / y).to.equal(-4);
   });
   
   it("should divide a positive and negative number", function(){
   	   var x = 30;
   	   var y = -6;

       expect(x / y).to.equal(-5);
   });
});

