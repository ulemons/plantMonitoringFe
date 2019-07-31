import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GrapghicsComponent } from './grapghics/grapghics.component';


@NgModule({
  declarations: [
    AppComponent,
    GrapghicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [GrapghicsComponent]
})
export class AppModule { }
