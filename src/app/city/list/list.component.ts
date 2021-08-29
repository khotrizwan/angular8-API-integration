import { Component, OnInit } from '@angular/core';
import City from '../City';
import { CityService } from '../city.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cities: any;
  constructor(private cityService: CityService) { 
  }

  ngOnInit(): void {
    this.cityList();
  }

  cityList() {
    this.cityService.cityList().subscribe(
        data => { 
          if(data['status'] == "SUCCESS") {
            this.cities = data['data'];
            console.log(this.cities);
            for(let city of this.cities) {
              console.log("id:" + city.id + ", name:" + city.name + ", details:" + city.details);
            }
          }
      }
    );
  } 

}
