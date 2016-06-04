var Vehicle = function() {
  this.miles = 0;
}
Vehicle.prototype.drive = function(dist) {
  this.miles += dist;
}

var Car = function(year) {
  this.year = year;
}

Car.prototype = new Vehicle();

var car = new Car(2015);
console.log(car.miles);
car.drive(10);
console.log(car.miles);