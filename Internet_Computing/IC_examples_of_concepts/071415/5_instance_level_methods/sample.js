var Car = function(year) {
  this.year = year;
}

var car1 = new Car(2015);
var car2 = new Car(1998);

car1.turn = function() {
  console.log('turning...');
}

car2.turn = function() {
  console.log('brakedown...');
}

car1.turn();
car2.turn();