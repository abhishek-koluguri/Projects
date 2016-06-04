var sam = {
  first: 'Sam',
  last: 'Johnson',
  age: 2,
  play: function() { console.log('having fun');}
};

console.log(sam.age);

delete sam.age; //don't do this.
console.log(sam.age);