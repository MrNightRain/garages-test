import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GarageListComponent } from './garage-list/garage-list.component';
import { DataService } from './core/data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
   declarations: [
      AppComponent,
      GarageListComponent,
      MapComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatListModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyCR6VIiiqjqIZsu7cCtn26OLj82Oev6OAA'
       })
   ],
   providers: [
      DataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
