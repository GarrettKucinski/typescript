export interface Mappable {
  markerContent(): string,
  location: {
    lat: number,
    lng: number
  }
};

interface MapConfig {
  divId: string,
  location: Location
};

class CustomMap {
  private googleMap: google.maps.Map

  constructor({ divId, location }: MapConfig) {
    const mapEl = document.getElementById(divId);
    const mapOptions = { zoom: 10, center: location };
    this.googleMap = new google.maps.Map(mapEl, mapOptions);
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location
    });

    marker.addListener('click', function () {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

export default CustomMap;
