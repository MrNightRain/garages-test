import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  readonly DATA_URL = 'http://api.citysdk.waag.org/layers/parking.garage/objects';

  constructor(private httpClient: HttpClient) {

  }

  public get(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(this.DATA_URL);
  }



}
