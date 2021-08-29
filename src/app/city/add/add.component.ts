import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from '../city.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formGrp: FormGroup;
  constructor(private formBuilder: FormBuilder, private cityService: CityService, private router: Router) {
    this.formGrp = this.formBuilder.group({
      cityName: ['', Validators.required ],
      cityDetails: ['', Validators.required ]
    });
  }
  
  ngOnInit(): void { }
  
  onClickSubmit(data : any) {
    console.log("data");
    console.log(data);
    
    this.cityService.addCity(data.cityName, data.cityDetails);    
    this.router.navigate(['/home']);
  }
  onClickBack() {
    console.log("Back Clicked");
    this.router.navigate(['/home']);
  }

}
