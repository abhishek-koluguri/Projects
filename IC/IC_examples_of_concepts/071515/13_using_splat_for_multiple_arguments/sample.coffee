max = (numbers...) ->
  large = 0
  for n in numbers
    large = n if large < n
  large

console.log max 1, 2
console.log max 1, 7, 4, 3
console.log max 1, 7, 9, 3