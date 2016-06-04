var totalValues = function(values, predicate) {
  var addTwo = function(a, b) { return a + b; }
  return values.filter(predicate).reduce(addTwo, 0);
}

var numbers = [1, 2, 3, 4, 5, 6];
var numbers2 = [5, 2, 3, 6, 1, 8];

var isGT = function(pivot) { 
  var check = function(n) {
    return n > pivot; //n is a parameter, but pivot comes from the defining scope—lexical scoping. Functions with unbounded variables have to close-over the defining scope. So they are called closure. check is a closure, while isGT is a higher-order (anonymous) function.
  }
  return check;
}
