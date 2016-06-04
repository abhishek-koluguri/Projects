var max = function() {
  if(arguments.length > 0)
    return Math.max.apply(null, arguments);
}

console.log(max(1, 2));
console.log(max(3, 1));
console.log(max(1, 2, 5, 0));
console.log(max());