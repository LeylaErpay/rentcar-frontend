import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  dataLoaded=false;
  filterText="";

  constructor(private carService: CarService, 
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService ) {}

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarByFilter(params["brandId"],params["colorId"]);
      }else if (params["colorId"]) {
        this.getCarByColor(params["colorId"])
      }else{
        this.getCars();
      }
    })  
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded=true
    })
  }
  getCarByFilter(brandId:number, colorId: number) {
    this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(response => 
      {
      this.cars = response.data,
      this.dataLoaded = true
      if(this.cars.length == 0)
      {
        this.toastrService.info('Arama sonuçunuza ait bir araç bulunmamaktadır.', 'Arama Sonucu');
      }
     })
  }

    getCarByBrand(brandId:number){
      this.carService.getCarByBrand(brandId).subscribe(response => {
        this.cars = response.data,
        this.dataLoaded = true
      })
    }

    getCarByColor(colorId:number){
      this.carService.getCarByColor(colorId).subscribe(response => {
        this.cars = response.data,
        this.dataLoaded = true
        console.log(this.cars);
      })
    }

  addToCart(car:Car){
    if(car.Id===1){
      this.toastrService.error("Hata","Bu araba sepete eklenemez")
    }else{
      this.toastrService.success("Sepete eklendi",car.brandName)
      this.cartService.addToCart(car);
    }
 
  }
  


}