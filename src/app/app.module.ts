import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import { CovidCaseComponent } from './covid-case/covid-case.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {NumberWithSignPipe} from "./covid-case/pipes/number-with-sign.pipe";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CovidService} from "./covid-case/service/covid-case.service";
import {CountriesService} from "./country/countries.service"; // import the module here

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CovidCaseComponent,
    NumberWithSignPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    FontAwesomeModule // add the module to the imports array
  ],
  providers: [
    CovidService,
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
