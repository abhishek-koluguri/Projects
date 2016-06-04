var foo = function() {
  var value1 = 1;
  
  { //no block scoping, sadly
    var value2 = 2;
    console.log(value2);
  }
  
  console.log(value1);
  console.log(value2);
}

foo();
//console.log(value1); //ERROR
//console.log(value2); //ERROR