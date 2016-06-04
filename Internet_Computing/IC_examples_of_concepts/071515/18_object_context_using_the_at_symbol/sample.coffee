class Car
  constructor: (year) ->
    @year = year
    @miles = 0
  
  drive: (dist) ->
    @miles += dist

car = new Car(2015)
console.log car.year
console.log car.miles

car.drive 10

console.log car.miles