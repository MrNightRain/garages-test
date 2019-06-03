import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../clases/position';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private newMapPosition = new BehaviorSubject<Position>({
    lat: 52.352223,
    lng: 4.909386,
    zoom: 12
    });
  currentMapPosition = this.newMapPosition.asObservable();


  readonly DATA_URL = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=30';

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<RootObject[]> {
    return this.httpClient.get<RootObject>(this.DATA_URL).pipe(
      map((data) => {
        const dataArr = [];
        data.features.forEach(garage => {
          const a = new SharedData();
          a.FreeSpaceShort = garage.properties.layers['parking.garage'].data.FreeSpaceShort;
          a.ShortCapacity = garage.properties.layers['parking.garage'].data.ShortCapacity;
          a.title = garage.properties.title;
          a.lng = garage.geometry.coordinates[0];
          a.lat = garage.geometry.coordinates[1];

          dataArr.push(a);
        });
        return dataArr;
      })
    );
  }

  mapCenter(pos) {
    this.newMapPosition.next(pos);
  }

}
export class SharedData {
  title: string;
  FreeSpaceShort: number;
  ShortCapacity: number;
  lat: number;
  lng: number;
}
