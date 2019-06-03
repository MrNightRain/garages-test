import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Position } from '../clases/position';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {

  public features: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.dataService.get().subscribe(response => {
      this.features = response;
    });
  }
  newPosition(lat, lng) {
    const pos = new Position();
    pos.lat = lat;
    pos.lng = lng;
    pos.zoom = 18;
    this.dataService.mapCenter(pos);
  }


}
