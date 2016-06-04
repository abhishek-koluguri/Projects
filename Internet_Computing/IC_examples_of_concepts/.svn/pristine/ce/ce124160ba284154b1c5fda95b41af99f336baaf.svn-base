var Car = function(year) {
  this.year = year;
  this.turn = function() {
    console.log('turning...');
  }
}

Car.prototype.drive = function() {
  console.log('driving...');
}

var car1 = new Car(2015);
var car2 = new Car(2015);
car1.turn();
car1.drive();

console.log(car1.drive === car2.drive);
console.log(car1.turn === car2.turn);
