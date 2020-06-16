import faker from 'faker'

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company</h1>
        <h2>Name is ${this.companyName}</h2>
        <h3>Catch Phrase is ${this.catchPhrase}</h3>
      </div>
    `
  }
}
