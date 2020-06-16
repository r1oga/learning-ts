/// <reference types="@types/googlemaps" />

export interface Markable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: markable.location.lat, lng: markable.location.lng }
    })

    // add info Window
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({ content: markable.markerContent() })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
