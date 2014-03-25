QUnit.test( "addition tests", 4, function( assert ) {
 
  function add() {
    return x + y;
  }
  x = 2;
  y = 5;
  var result = add();
 
  assert.equal( result, 7, "2 plus 5 equals 7" );
  
  x = 2;
  y = -3;
  var result = add();
 
  assert.equal( result, -1, "2 plus -3 equals -1" );
  
  x = -2;
  y = 5;
  var result = add();
 
  assert.equal( result, 3, "-2 plus 5 equals 3" );
  
  x = -2;
  y = -6;
  var result = add();
 
  assert.equal( result, -8, "-2 plus -6 equals -8" );
});

QUnit.test( "subtraction tests", 4, function( assert ) {
 
  function subtract() {
    return x - y;
  }
  x = 10;
  y = 5;
  var result = subtract();
 
  assert.equal( result, 5, "10 minus 5 equals 5" );
  
  x = 5;
  y = -3;
  var result = subtract();
 
  assert.equal( result, 8, "5 minus -3 equals 8" );
  
  x = -2;
  y = 5;
  var result = subtract();
 
  assert.equal( result, -7, "-2 minus 5 equals -7" );
  
  x = -3;
  y = -6;
  var result = subtract();
 
  assert.equal( result, 3, "-3 minus -6 equals 3" );
});

QUnit.test( "multiplication tests", 3, function( assert ) {
 
  function mult() {
    return x * y;
  }
  x = 3;
  y = 5;
  var result = mult();
 
  assert.equal( result, 15, "3 times 5 equals 15" );
  
  x = 2;
  y = -3;
  var result = mult();
 
  assert.equal( result, -6, "2 times -3 equals -6" );
  
  x = -4;
  y = -5;
  var result = mult();
 
  assert.equal( result, 20, "-4 times -5 equals 20" );
  
});

QUnit.test( "division tests", 3, function( assert ) {
 
  function div() {
    return x / y;
  }
  x = 10;
  y = 5;
  var result = div();
 
  assert.equal( result, 2, "10 divided by 5 equals 2" );
  
  x = 6;
  y = -3;
  var result = div();
 
  assert.equal( result, -2, "6 divided by -3 equals -2" );
  
  x = -2;
  y = -1;
  var result = div();
 
  assert.equal( result, 2, "-2 divided by -1 equals 2" );
  
});
