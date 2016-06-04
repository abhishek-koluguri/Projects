var greet = function(name) {
  console.log(
    this.toUpperCase() + ' ' + name);
}

//greet('hello', 'Joe'); //ERROR

greet.call('hello', 'Joe');

greet.call('howdy', 'Jane');