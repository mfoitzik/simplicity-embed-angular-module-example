import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimplicityEmbed} from '@simplicitywebtools/simplicity-embed-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplicityEmbed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
