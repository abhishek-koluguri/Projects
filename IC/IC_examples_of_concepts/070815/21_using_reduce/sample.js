var max = function() {
  if(arguments.length > 0) {
    var pickLarge = function(max, e) { 
      if(max < e) 
        return e; 
      else 
        return max; 
    }

    return Array.prototype.slice.call(arguments).reduce(pickLarge);      
  }
}

console.log(max(1, 2));
console.log(max(3, 2));

console.log(max(1, 4, 3));

console.log(max(1, 2, 5, 2));
console.log(max());