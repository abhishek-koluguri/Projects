var Car = function(year) {
  this.year = year;
}

Car.prototype.drive = function() {
  console.log('driving...');
}

Car.prototype.turn = function() {
  console.log('turning...');
}


var car = new Car(2015);
car.turn();
car.drive();

var mock = {
    drive: function() {
      console.log('mocked drive...');
    }
}
car.__proto__ = mock;
car.drive();

car.__proto__ = Car.prototype;
car.drive();


car.turn = function() {
  console.log('mocked turn...');
}

car.turn();