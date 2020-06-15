// object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// array, can change order
const pepsiArray = ['brown', true, 40]
// tuple, order is frozen. Typeat each index is frozen
const pepsiTuple: [string, boolean, number] = ['brown', true, 40]

// Alternative: type alias
type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 40]

//  avoid tuple. They carry too little info
// what do 400 and 3354 mean?
const carSpecs: [number, number] = [400, 3354]

// prefer object
// meaning of value are obvious
const carSpecsObj = {
  horsepower: 400,
  weight: 3354
}
