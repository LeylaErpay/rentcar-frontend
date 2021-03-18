import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ModelComponent } from './components/model/model.component';
//import { BrandComponent } from './components/brand/brand.component';
//import { ColorComponent } from './components/color/color.component';
//import { CustomerComponent } from './components/customer/customer.component';
//import { CarComponent } from './components/car/car.component';
//import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    //ModelComponent,
    //ColorComponent,
    //CustomerComponent,
    CarComponent,
    //RentalComponent,
    NaviComponent,
    BrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }