var Car = function(year) {
  this.year = year;
}

Car.prototype.miles = 0;
Car.prototype.drive = function(dist) {
  this.miles += dist;
}

var car1 = new Car(2015);
console.log(car1.miles);

car1.drive(10);

console.log(car1.miles);
