var numbers = [1, 2, 3, 4, 5, 6];

var addTwo = function(a, b) {
  return a + b
}

console.log(numbers.reduce(addTwo));

//reduce is using the output of the function
//to feedback as input for subsequent calls
//until it applies the function for all the element.



