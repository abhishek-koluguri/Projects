var Car = function(year) {
  this.year = year;
}

Car.prototype.miles = 0;
Car.prototype.drive = function(dist) {
  this.miles += dist;
}

var car1 = new Car(2015);
var car2 = new Car(2016);

car1.drive(10);

console.log(car1.miles);
console.log(car2.miles);

console.log(car1.__proto__ === car2.__proto__);

//gets are deeper, sets are shallow.