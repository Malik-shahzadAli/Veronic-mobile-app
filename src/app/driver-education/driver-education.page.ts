import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-driver-education',
  templateUrl: './driver-education.page.html',
  styleUrls: ['./driver-education.page.scss'],
})
export class DriverEducationPage implements OnInit {
  public finalObj;
  public selectedValue;
  public dropDownSelected = true;
  public select = false;
  modelText = '';
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

  constructor(private obj: JsonCommanObjectService,
              private toastController: ToastController,
              private translate: TranslateService,
              public loadingController: LoadingController) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside Education Component : ', this.finalObj);
   }
   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log('SELECTED VALUE  ' + this.selectedValue);
    // this.dropDownSelected = false;
    this.select = true;

  }
  getUserEducationNextClick() {
    // const driverEducation = this.educationStatus.value;
    // console.log('Driver Education selected value : ', driverEducation);
    this.finalObj.customer.customerData.education = this.selectedValue;
    console.log('getUserEducationNextClick Function calle');
    console.log(this.finalObj);
  }
  ngOnInit() {
    if ((this.finalObj.customer.customerData.education !== undefined) && (this.finalObj.customer.customerData.education !== '')) {

      this.driverEducation.patchValue({
        education : this.finalObj.customer.customerData.education,
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
