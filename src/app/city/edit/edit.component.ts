import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import City from '../City';
import { CityService } from '../city.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  city: City;
  id: any;
  formGrp: FormGroup;
  constructor(private formBuilder: FormBuilder, private cityService: CityService, private router: Router, private route: ActivatedRoute) {
    
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.city = new City(this.id, "", "");
    this.getCity(this.id);

    this.formGrp = this.formBuilder.group({
      cityName: [this.city.name, Validators.required ],
      cityDetails: [this.city.details , Validators.required ]
    });
  }
  
  ngOnInit(): void {
  }
  
  onClickSubmit(data : any) {
    console.log("data");
    console.log(data);
    
    this.cityService.editCity( this.id, data.cityName, data.cityDetails,);    
    this.router.navigate(['/home']);
  }
  onClickBack() {
    console.log("Back Clicked");
    this.router.navigate(['/home']);
  }

  getCity(id : any) {
    this.cityService.getCity(id).subscribe(
        data => { 
          if(data['status'] == "SUCCESS") {
            this.city = data['data'];
            console.log(this.city);
            this.formGrp.patchValue({
              cityName: this.city.name,
              cityDetails: this.city.details
            });
          }
      }
    );
  } 

}
