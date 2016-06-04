var totalValues = function(values) {
  var total = 0;
  for(var i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
}

console.log(totalValues([1, 2, 3, 4, 5, 6]));
