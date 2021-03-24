import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private carService:CarService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      carName:["",Validators.required],
      dailyPrice: ["",Validators.required],
      brandId:["",Validators.required],
      Id: ["",Validators.nullValidator],  
      brandName: ["",Validators.required],
      modelName: ["",Validators.required],
      modelYear: ["",Validators.required],
      colorName: ["",Validators.required],
      colorId:["",Validators.required],
      descriptions: ["",Validators.required]
    })
 }
 add(){
  if(this.carAddForm.valid){
    let carModel = Object.assign({},this.carAddForm.value)
    this.carService.add(carModel).subscribe(response=>{
      this.toastrService.success("Başarılı")
    },
    responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }       
      } 
    })
    
  }else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
}
}
