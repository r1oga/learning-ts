//  array
let colors: string[] = ['red', 'blue', 'green']
let numbers: number[] = [1, 2, 3]

//  Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = { x: 10, y: 20 }

//  function, (annotation to the VARIABLE not the function)
let fn: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use annotation
// 1) function returns 'any' type
const json = '{"x": 10, "y": 20}'
// const coords = JSON.parse(json)
// '10' string value is parsed to number value 10
// typescript can't guess it so it uses 'any' >> TO AVOID (point of ts is to define types!)
const coords: { x: number; y: number } = JSON.parse(json)
console.log(coords) // {x: 10, y: 20}

// 2) when declaration and initialization not on same line
let words = ['red', 'green', 'blue']
let foundWord: boolean
for (const [, word] of words.entries()) {
  if (word === 'green') {
    foundWord = true
  }
}

// 3) when inference doesn't work even though declaration and init on same line
//  when we want to create a type association (OR)
// (bad code)
let nums = [-1, -10, 12]
let numAboveZero: boolean | number = false
for (const [, num] of nums.entries()) {
  if (num > 0) {
    numAboveZero = num
  }
}
