class ArrayofAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number) {
    return this.collection[index]
  }
}

const arr = new ArrayofAnything<string>(['a', 'b', 'c'])
const arr2 = new ArrayofAnything<number>([1, 2, 3])

// Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(['a', 'b', 'c'])

// generic constraints
class CarClass {
  print() {
    console.log('I am a car')
  }
}
class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHouseOrCar<House>([new House(), new House()])
