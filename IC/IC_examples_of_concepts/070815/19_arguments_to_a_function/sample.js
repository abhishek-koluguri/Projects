var max = function(a, b) {
  if(a > b)
    return a;
  return b;
}

console.log(max(1, 2));
console.log(max(3, 2));

console.log(max(1, 4, 3));

//In Java or C# or ...
//the number of arguments a function can take is decided by the function definition.

//In JavaScript, the number of arguments a function can take is as many as the caller wants to send.