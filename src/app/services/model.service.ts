import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  apiUrl = 'https://localhost:44324/api/models/getall';

  constructor(private httpClient: HttpClient) {}

  getModels(): Observable<ListResponseModel<Model>> {
    return this.httpClient.get<ListResponseModel<Model>>(this.apiUrl);
  }
}

  
