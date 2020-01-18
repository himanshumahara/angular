import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app.routing';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ AppRoutingModule,BrowserModule, FormsModule,HttpModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
