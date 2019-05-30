import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GarageListComponent } from './garage-list/garage-list.component';
import { DataService } from './core/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      GarageListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule
   ],
   providers: [
      DataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
