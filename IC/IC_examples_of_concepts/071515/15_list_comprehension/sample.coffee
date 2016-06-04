values = [1..10]

console.log x * 2 for x in values when x % 2 == 0

#the above code has a bug

#it printed each one of the expressions instead of returning an array that we then printed.
#like it was the following
#(console.log x * 2) for x in values when x % 2 == 0

#be careful

console.log (x * 2 for x in values when x % 2 == 0)
