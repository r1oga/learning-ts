/// <reference types="@types/googlemaps" />

interface Markable {
  location: {
    lat: number
    lng: number
  }
}
export class CustomMap {
  private googleMap: google.maps.Map

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    })
  }

  addMarker(markable: Markable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: markable.location.lat, lng: markable.location.lng }
    })
  }
}
