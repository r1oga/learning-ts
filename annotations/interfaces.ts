interface Reportable {
  // name: string
  // year: Date
  // broken: boolean
  summary(): string // function that called summary returns a string
}

const oldTwingo = {
  name: 'twingo',
  year: new Date(),
  broken: true,
  summary(): string {
    return `
      Name: ${this.name}
      Year: ${this.year}
      broken: ${this.broken}
    `
  },
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

// verbose and will lead to duplicate code
// const printVehicle = ({
//   name,
//   year,
//   broken,
// }: {
//   name: string
//   year: number
//   broken: boolean
// }): void => {
//   console.log(`
//       Name: ${name}
//       Year: ${year}
//       broken: ${broken}
//     `)
// }

// better: with interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}
printSummary(oldTwingo)
printSummary(drink)
