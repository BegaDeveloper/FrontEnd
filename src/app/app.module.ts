import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routesComp } from './app-routing.module';
import { AppComponent } from './app.component';
//HTTP
import { HttpClientModule } from '@angular/common/http';
//FORMS
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ResResolver } from './services/res.resolver';


@NgModule({
  declarations: [
    AppComponent,
    routesComp,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ResResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
