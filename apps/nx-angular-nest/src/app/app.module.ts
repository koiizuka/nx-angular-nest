import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng5SliderModule } from 'ng5-slider';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, Ng5SliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
