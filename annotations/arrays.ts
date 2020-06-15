const carMakers = ['ford', 'toyota', 'peugeot'] // type inference
const carMakersAnnoted: string[] = [] // init with empty array, use annotation
const dates = [new Date(), new Date()]

// 2D arrays
const carsByMake: string[][] = []

//  help with inference when extracting values
const car1 = carMakers[0]
const myCar = carMakers.pop()

// prevent adding incompatible values to array
carMakers.push(1) // ERROR

//  get help when iterating
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

//  flexible types
const importantDates = [new Date(), '2025-02-02']
importantDates.push('2025-03-03')
importantDates.push(new Date())
importantDates.push(1) // ERROR
