import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {


  readonly DATA_URL = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=20';

  constructor(private httpClient: HttpClient) {

  }

  public get(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(this.DATA_URL);
  }



}
