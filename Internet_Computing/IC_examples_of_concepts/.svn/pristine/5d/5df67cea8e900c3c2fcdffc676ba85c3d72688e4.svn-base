class Vehicle
  constructor: (@year) ->
    @miles = 0
    
  drive: (dist) ->
    console.log 'Vehicle drive called...'
    @miles += dist

class Car extends Vehicle
  constructor: (@year, @color) ->
    super
  
  drive: (dist) ->
    console.log 'car drive called...'
    super
    
car = new Car(2015, 'Orange')

for prop of car
  console.log "#{prop}"



