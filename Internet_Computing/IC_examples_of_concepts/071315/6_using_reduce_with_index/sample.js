var numbers = [1, 2, 3, 4, 5, 6];

var addTwo = function(a, b, index) {
  console.log(a + ":" + b + ":" + index);
  return a + b
}

console.log(numbers.reduce(addTwo, 0));