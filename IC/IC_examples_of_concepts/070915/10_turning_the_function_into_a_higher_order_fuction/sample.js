var totalValues = function(values, predicate) {
  var total = 0;
  for(var i = 0; i < values.length; i++) {
    if(predicate(values[i]))
      total += values[i];
  }
  return total;
}

var acceptAll = function() { return true; }
console.log(
  totalValues([1, 2, 3, 4, 5, 6], acceptAll));
  
//higher-order function:
//much like how we pass object to function we can also pass functions to functions.
//much like how we can create objects within functions we can create functions within functions
//much like how we can return objects from functions, we can return functions from functions

