var foo = function() {
  for(var i = 0; i < 5; i++) {
    func();
  }
}

var func = function() {
  for(var i = 0; i < 3; i++) {
    console.log(i);
  }
}

foo();