var values = [1, 2, 3, 4, 5, 6];

var evenOnly = [];
for(var i = 0; i < values.length; i++) {
  if(values[i] % 2 == 0)
    evenOnly.push(values[i]);
}

console.log(evenOnly);

var isEven = function(e) { return e % 2 == 0; }
console.log(values.filter(isEven));