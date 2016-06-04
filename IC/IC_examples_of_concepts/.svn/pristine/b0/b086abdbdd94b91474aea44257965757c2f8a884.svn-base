var totalValues = function(values, predicate) {
  var total = 0;
  for(var i = 0; i < values.length; i++) {
    if(predicate(values[i]))
      total += values[i];
  }
  return total;
}

var numbers = [1, 2, 3, 4, 5, 6];
var acceptAll = function() { return true; }
console.log(totalValues(numbers, acceptAll));
  
var isEven = function(n) { return n % 2 == 0; }
console.log(totalValues(numbers, isEven));

var isOdd = function(n) { return n % 2 != 0; }
console.log(totalValues(numbers, isOdd));