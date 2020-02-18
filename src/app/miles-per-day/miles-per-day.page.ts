import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-miles-per-day',
  templateUrl: './miles-per-day.page.html',
  styleUrls: ['./miles-per-day.page.scss'],
})
export class MilesPerDayPage implements OnInit {
  private singleCarObj;

  milesInfo = new FormGroup({
    milesPerDay: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])
  });
  get miles() {
    return this.milesInfo.get('milesPerDay');
  }

  constructor(private obj: JsonCommanObjectService , private location: Location) {
    this.singleCarObj = obj.carObjTemplate;

  }

  milesPerDayNextClick() {
    this.singleCarObj.dailyMileage.amount = this.miles.value;
    console.log('INSIDE MILES PER DAYS NEXT BTN FUNCTION');
    console.log('Updated Object : ', this.singleCarObj);
  }
  // BACK TO THE PRIVIOUS WINDOW
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  ngOnInit() {
    this.milesInfo.setValue({
      milesPerDay : this.singleCarObj.dailyMileage.amount,
    });
  }

}
