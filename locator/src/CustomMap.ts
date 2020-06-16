/// <reference types="@types/googlemaps" />
import { User } from './User'
import { Company } from './Company' // refers to class and to type

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    })
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: user.location.lat, lng: user.location.lng }
    })
  }
  addCompanyMarker(company: Company): void {}
}
