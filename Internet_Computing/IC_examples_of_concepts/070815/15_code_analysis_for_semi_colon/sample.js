var foo = function(number) {
  if(number > 5)
    return number;
  else {
    return number 
      * 2; //since this line can't stand along, no ; at the end of of the previous line
  }
}

console.log(foo(6));
console.log(foo(3));