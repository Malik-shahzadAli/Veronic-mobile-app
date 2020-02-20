import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-miles-per-day',
  templateUrl: './miles-per-day.page.html',
  styleUrls: ['./miles-per-day.page.scss'],
})
export class MilesPerDayPage implements OnInit {
  private singleCarObj;
  public select = false;
  modelText = '';

  milesInfo = new FormGroup({
    milesPerDay: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])
  });
  get miles() {
    return this.milesInfo.get('milesPerDay');
  }

  constructor(private obj: JsonCommanObjectService ,
              private location: Location, private translate: TranslateService,
              private toastController: ToastController) {
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
    // console.log(this.milesInfo.status);
  }
  async getErrorTost() {
    this.translate.get('MilesPerDay.error').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const toast = await this.toastController.create({
      message: this.modelText,
      duration: 2000
    });
    toast.present();
  }

}
