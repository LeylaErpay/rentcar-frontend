import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailAndImagesDto } from 'src/app/models/carDetailAndImagesDto';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private carDetailService:CarDetailService,
  private activatedRoute:ActivatedRoute) { }


  carDetail:CarDetailAndImagesDto;
  dataLoaded = false;
  imageBasePath = 'https://localhost:44324/'

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["Id"]){
        this.getCarDetail(params["Id"]);
      }
  });
  }

  getCarDetail(Id:number){
    this.carDetailService.getCarDetail(Id).subscribe(response => {      
     // this.carDetail = response.data
     // console.log(this.carDetail.carImages);
      this.dataLoaded = true
    })
  }
  getSliderClassName(index:number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}
