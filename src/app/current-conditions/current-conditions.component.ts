import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ZipcodeState } from '../reducers/zip-codes.reducer';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit{

  zipCodes: string[] = [];

  constructor(private weatherService : WeatherService, 
              private locationService : LocationService, 
              private router : Router,
              private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select((state: State) => state.zipcodes).subscribe(
      (zipcodesState: ZipcodeState) => {
        this.zipCodes = zipcodesState.zipcodes;
      }
    );

  }

  getCurrentConditions() {
    return this.weatherService.getCurrentConditions();
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
