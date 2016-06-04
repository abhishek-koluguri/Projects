var totalValues = function(values, predicate) {
  var addTwo = function(a, b) { return a + b; }
  return values.filter(predicate).reduce(addTwo, 0);
}

var numbers = [1, 2, 3, 4, 5, 6];
var numbers2 = [5, 2, 3, 6, 1, 8];

var isGT = function(pivot) { 
  return function(n) { return n > pivot; }
}

console.log(totalValues(numbers, isGT(3)));
//the above is equiavalent to the following.
//console.log(totalValues(numbers, function(n) {
//  return n > 3;
//}));

console.log(totalValues(numbers2, isGT(3)));

console.log(totalValues(numbers, isGT(7)));
console.log(totalValues(numbers2, isGT(7)));