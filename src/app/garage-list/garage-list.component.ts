import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {

  garages: any;

  constructor(private data: DataService) {
   }

  ngOnInit() {
    this.garages = this.data.get_data();
  }

}
