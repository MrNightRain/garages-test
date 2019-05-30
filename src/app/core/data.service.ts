import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  readonly DATA_URL = 'http://api.citysdk.waag.org/layers/parking.garage/objects';

  constructor(private httpClient: HttpClient) {

  }

  get_data(): Observable<RootObject[]> {
    return this.httpClient.get(this.DATA_URL).pipe(map(data => {
      const garagesList = data['features'];
      // console.log(garagesList);
      return garagesList;
    }));
  }

}
