import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GarageListComponent } from './garage-list/garage-list.component';
import { DataService } from './core/data.service';
import {MatListModule} from '@angular/material/list';

@NgModule({
   declarations: [
      AppComponent,
      GarageListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ,
      MatListModule,
   ],
   providers: [
      DataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
