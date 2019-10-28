import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAppComponent } from './form-app/form-app.component';
import { ViewAppComponent } from './view-app/view-app.component';



@NgModule({
  declarations: [
    AppComponent,
    FormAppComponent,
    ViewAppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
