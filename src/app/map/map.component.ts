import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  // map settings
  public zoom = 12;
  public lat = 52.379189;
  public lng = 4.899431;

}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
}

