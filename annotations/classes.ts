class Vehicle {
  // color: string
  //
  // constructor(color: string) {
  //   this.color = color
  // }

  //  shorthand equivalent to above
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log('tutut')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const vehicle = new Vehicle('purple')
console.log(vehicle.color)
const car = new Car(4, 'orange')
car.startDrivingProcess()
