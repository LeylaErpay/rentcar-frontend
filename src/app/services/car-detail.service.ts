import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'rentcar-frontend/src/app/models/listResponseModel';
import { Observable } from 'rxjs';
import { CarDetailAndImagesDto } from '../models/carDetailAndImagesDto';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44324/api/';

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:Number):Observable<ListResponseModel<CarDetailAndImagesDto>>{
    
    let newPath = this.apiUrl +'cars/getcardetail?Id='+carId;
    return this.httpClient.get<ListResponseModel<CarDetailAndImagesDto>>(newPath);
  }
  
}
