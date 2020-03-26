import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-sec-driver-education',
  templateUrl: './sec-driver-education.component.html',
  styleUrls: ['./sec-driver-education.component.scss'],
})
export class SecDriverEducationComponent implements OnInit {

  public singleDriverObj;
  public dropDownSelected = true;
  public gettingDriverEducationFromSingleDriverObj;

  public select = false;
  public modelText = '';

  private selectedValue;
  public driverName;

  educationStatusArray = [
    {status: 'High school or GED', value : 'H'},
    {status : 'Associate degree | Certification | Diploma', value : 'A'},
    {status : 'Bachelor\'s degree', value : 'B'},
    {status : 'Graduate or professional degree', value : 'S'}
  ];

  driverEducation = new FormGroup({
    education : new FormControl('', [
      Validators.required
    ])
  });
  get educationStatus() {
    return this.driverEducation.get('education');
  }

  constructor(private obj: JsonCommanObjectService, private toastController: ToastController, private translate: TranslateService ) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    this.gettingDriverEducationFromSingleDriverObj = this.singleDriverObj.driverData.dEducation;
    this.driverName = this.singleDriverObj.driverData.dName;
    console.log('Inside Add another driver Education Component : ', this.singleDriverObj);
   }

   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;
  }

  getUserEducationNextClick() {
    // const driverEducation = this.educationStatus.value;
    // console.log('New Driver Education selected value : ', driverEducation);
    this.singleDriverObj.driverData.dEducation = this.selectedValue;
    console.log('getUserEducationNextClick Function called');
    console.log(this.singleDriverObj);
  }

  ngOnInit() {
    console.log(this.driverName);
    if (this.singleDriverObj.driverData.dEducation) {
      this.driverEducation.patchValue({
        education : this.singleDriverObj.driverData.dEducation
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
