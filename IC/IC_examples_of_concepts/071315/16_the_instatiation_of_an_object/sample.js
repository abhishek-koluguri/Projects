var Car = function(year) {
  this.year = year;
}

console.log(Car.prototype);

var car1 = new Car(2015);
//The above line is a 3 step process.
//1. Allocate memory for Car (memory for an empty JSON object)—let's call it inst.
//2. Car.call(inst, 2015);
//3. inst.__proto__ = Car.prototype

console.log(car1);
console.log(car1.__proto__);

console.log(Car.prototype === car1.__proto__);
