class Car
  constructor: (@year) ->
    @miles = 0
  
  drive: (dist) ->
    @miles += dist

car = new Car(2015)
console.log car.year
console.log car.miles

#using @ on a parameter makes it a field initialization without the need for an extra assignment.