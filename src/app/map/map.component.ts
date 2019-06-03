import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { map } from 'rxjs/operators';
import { Position } from '../clases/position';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public zoom: number;
  public lat: number;
  public lng: number;
  public data: any;



  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    this.dataService.get().subscribe(response => {
      this.data = response;
    });
    this.dataService.currentMapPosition.subscribe(a => {
      this.lat = a.lat;
      this.lng = a.lng;
      this.zoom = a.zoom;

    });
  }
}

