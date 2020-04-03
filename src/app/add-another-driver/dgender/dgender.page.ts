import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-dgender',
  templateUrl: './dgender.page.html',
  styleUrls: ['./dgender.page.scss'],
})
export class DgenderPage implements OnInit {
  public singleDriverObj;
  public dropDownSelected = true;
  public gettingDriverEmployedStatusFromSingleDriverObj;
  public driverName;

  public select = false;
  public modelText = '';

  public selectedValue;
  public currentIndex;
  employmentStatusArray = [
    {status: 'MALE', value : 'M'},
    {status : 'FEMALE', value : 'F'}
  ];
  gender = new FormGroup({
    gender : new FormControl('', [
      Validators.required
    ])
  });
  get employmentStatus() {
    return this.gender.get('employmentStatus');
  }

  constructor(private obj: JsonCommanObjectService,
              private toastController: ToastController,
              private translate: TranslateService,public loadingController: LoadingController) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    this.gettingDriverEmployedStatusFromSingleDriverObj = this.singleDriverObj.driverData.dgender;
    this.driverName = this.singleDriverObj.driverData.dFullName;
    console.log(this.driverName)
    console.log('Inside New driver Employment Component : ', this.singleDriverObj);
   }

   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }
  getGenderNextClick() {
      // const driverEmployment = this.employmentStatus.value;
      // console.log('New Driver Employment selected value : ', driverEmployment);
      this.singleDriverObj.driverData.dgender = this.selectedValue;
      console.log('getUserEducationNextClick Function called');
      console.log(this.singleDriverObj);
    }
  ngOnInit() {
    if (this.singleDriverObj.driverData.dgender) {
      this.gender.patchValue({
        employmentStatus : this.singleDriverObj.driverData.dgender
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
  ionViewDidEnter(){
  }
  async loading2() {
    const loading = await this.loadingController.create({
      message: '',
      id: 'loading2'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
