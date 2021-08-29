import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import City from '../City';
import { CityService } from '../city.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  city: City;
  id: any;
  constructor(private cityService: CityService, private router: Router, private route: ActivatedRoute) {
    
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.city = new City(this.id, "", "");
    this.getCity(this.id);
  }
  
  ngOnInit(): void {
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
          }
      }
    );
  } 

}
