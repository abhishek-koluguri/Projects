//prototypal inheritance
var worker = {
  work: function() {
    console.log('working...');
  }
}

var manager = {
  work: function() {
    console.log('play golf');
  }
}

var sam = {
  first: 'Sam'
}

try {
  sam.work();  
} catch(ex) {
  console.log("nope, not working...");
}

sam.__proto__ = worker;
sam.work();

sam.__proto__ = manager;
sam.work();