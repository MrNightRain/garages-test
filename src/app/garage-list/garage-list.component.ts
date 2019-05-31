import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {

  public garages: Feature[];
  garageState: number;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {

    this.dataService.get().subscribe(response => {
      this.garages = response.features;
    });
    this.getData();
    console.log(this.garageState);
  }

  public getData() {
    this.garages.forEach(garage => {
      return this.garageState = garage.properties.layers['parking.garage'].data.FreeSpaceShort;
    });
  }

}
