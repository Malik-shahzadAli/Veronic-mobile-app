import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-is-employed',
  templateUrl: './is-employed.component.html',
  styleUrls: ['./is-employed.component.scss'],
})
export class IsEmployedComponent implements OnInit {

  public singleDriverObj;
  public dropDownSelected = true;
  public gettingDriverEmployedStatusFromSingleDriverObj;
  public driverName;

  public select = false;
  public modelText = '';

  public selectedValue;
  public currentIndex;
  employmentStatusArray = [
    {status: 'Employed', value : 'E'},
    {status : 'Other', value : 'U'}
  ];
  driverIsEmployed = new FormGroup({
    employmentStatus : new FormControl('', [
      Validators.required
    ])
  });
  get employmentStatus() {
    return this.driverIsEmployed.get('employmentStatus');
  }

  constructor(private obj: JsonCommanObjectService, private toastController: ToastController, private translate: TranslateService) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    this.gettingDriverEmployedStatusFromSingleDriverObj = this.singleDriverObj.driverData.isDEmployed;
    this.driverName = this.singleDriverObj.driverData.dName;

    console.log('Inside New driver Employment Component : ', this.singleDriverObj);
   }

   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }
    getDriverIsEmployedNextClick() {
      const driverEmployment = this.employmentStatus.value;
      console.log('New Driver Employment selected value : ', driverEmployment);
      this.singleDriverObj.driverData.isDEmployed = driverEmployment;
      console.log('getUserEducationNextClick Function called');
      console.log(this.singleDriverObj);
    }
  ngOnInit() {
    if (this.singleDriverObj.driverData.isDEmployed) {
      this.driverIsEmployed.patchValue({
        employmentStatus : this.singleDriverObj.driverData.isDEmployed
      });
      this.dropDownSelected = false;

    }
  }
  async getErrorTost() {
    this.translate.get('select.dropdown').
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
