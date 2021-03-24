import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path: "cars",component:CarComponent },
  {path: "cars/brands/:brandId", component:CarComponent},
  {path: "cars/brands/:brandName", component:CarComponent},
  {path: "cars/color/:colorId", component:CarComponent},
  {path: "brands/:brandName", component:BrandComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/car-detail/:carId", component:CarDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
