var totalValues = function(values, predicate) {
  var addTwo = function(a, b) { return a + b; }
  return values.filter(predicate).reduce(addTwo, 0);
}

var numbers = [1, 2, 3, 4, 5, 6];
var numbers2 = [5, 2, 3, 6, 1, 8];

var isGT3 = function(n) { return n > 3; }
console.log(totalValues(numbers, isGT3));

console.log(totalValues(numbers2, isGT3));

var isGT7 = function(n) { return n > 7; }

console.log(totalValues(numbers, isGT7));
console.log(totalValues(numbers2, isGT7));

//duplication crept in again.
//between lines 9 and 14.