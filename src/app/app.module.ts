import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Md2Module } from "md2";
import 'hammerjs';

import { AppRoutingModule } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,MaterialModule,BrowserAnimationsModule,FlexLayoutModule,Md2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
