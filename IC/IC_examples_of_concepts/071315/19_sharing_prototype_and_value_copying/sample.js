var Car = function(year) {
  this.year = year;
}

Car.prototype.miles = 0;
Car.prototype.drive = function(dist) {
  this.miles += dist;
}

var car1 = new Car(2015);

console.log(car1.miles); //get is deep
for(var prop in car1) {
  console.log(prop + ":" + car1.hasOwnProperty(prop));
}

car1.drive(10);
//set is shallow
for(var prop in car1) {
  console.log(prop + ":" + car1.hasOwnProperty(prop));
}
