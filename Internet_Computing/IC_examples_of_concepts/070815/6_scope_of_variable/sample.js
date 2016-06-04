var foo = function() {
  var local = 1;
  value = 4;
  console.log(local);
  
  console.log(value);
}

foo();
//console.log(local); //Error, local is not defined, it is, well, local
console.log(value);