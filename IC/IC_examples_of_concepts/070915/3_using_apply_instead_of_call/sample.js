var greet = function(name1, name2) {
  console.log(
    this.toUpperCase() + ' ' + name1, name2);
}

greet.call('hello', 'Tom', 'Jerry');

var names = ['Tom', 'Jerry'];
greet.call('hi', names[0], names[1]);

greet.apply('hi', names);