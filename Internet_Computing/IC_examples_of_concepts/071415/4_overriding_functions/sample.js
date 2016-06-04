var Vehicle = function() {
  this.miles = 0;
}
Vehicle.prototype.drive = function(dist) {
  console.log('Vehicle driving...');
  this.miles += dist;
}

var Car = function(year) {
  this.year = year;
}

Car.prototype = new Vehicle();

Car.prototype.drive = function(dist) {
  console.log('car driving...');
  Vehicle.prototype.drive.apply(this, arguments);
}

var car = new Car(2015);
console.log(car.miles);
car.drive(10);
console.log(car.miles);