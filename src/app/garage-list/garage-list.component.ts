import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {

  public features: Feature[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.dataService.get().subscribe(response => {
      this.features = response.features;
    });

  }

  public getData(): SharedData[] {
    const dataArr: Array<SharedData> = [];
    this.features.forEach(garage => {
      const a = new SharedData();
      a.FreeSpaceShort = garage.properties.layers['parking.garage'].data.FreeSpaceShort;
      a.ShortCapacity = garage.properties.layers['parking.garage'].data.ShortCapacity;
      a.title = garage.properties.title;
      a.geometry = garage.geometry;
      dataArr.push(a);
    });
    return dataArr;
  }

}
class SharedData {
  title: string;
  FreeSpaceShort: number;
  ShortCapacity: number;
  geometry: Geometry;
}
