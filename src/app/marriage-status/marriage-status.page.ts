import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-marriage-status',
  templateUrl: './marriage-status.page.html',
  styleUrls: ['./marriage-status.page.scss'],
})
export class MarriageStatusPage implements OnInit {

  public finalObj;
  public selectedValue;
  public customerFirstName;
  public dropDownSelected = true;
  public select = false;
  modelText = '';
  maritalStatusArray = [
    {status : 'Single', value : 'S'},
    {status: 'Married', value : 'M'},
    {status : 'Divorced', value : 'D'},
    {status : 'Widowed', value : 'W'},
    {status : 'Other', value : 'E'},
    {status : 'Complicated', value : 'E'}
  ];
  public desiredValue = this.maritalStatusArray[1];
  genderAndMartialStatus = new FormGroup({
    martialStatus : new FormControl('', [
      Validators.required
    ])
  });
  get maritalStatus() {
    return this.genderAndMartialStatus.get('martialStatus');
  }
  constructor(private obj: JsonCommanObjectService,
              private toastController: ToastController,
              private translate: TranslateService,public loadingController: LoadingController) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside MaritalStatus Component : ', this.finalObj);
    this.customerFirstName = this.finalObj.customer.customerData.firstName;
   }
   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log('Selected Value' + this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;
  }

  getUserMaritalStatusNextClick(){
    console.log('Marital-Status value selected : ', this.selectedValue);
    this.finalObj.customer.customerData.maritalStatus = this.selectedValue;
    console.log('Click getUserMaritalStatusNextClick Function');
    console.log(this.finalObj);
  }

  ngOnInit() {
    this.loading2();
    if ((this.finalObj.customer.customerData.maritalStatus !== undefined) && this.finalObj.customer.customerData.maritalStatus !== '') {

      this.genderAndMartialStatus.patchValue({
        martialStatus : this.finalObj.customer.customerData.maritalStatus,
      });
      this.customerFirstName = this.finalObj.customer.customerData.firstName;
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
    this.loadingController.dismiss('loading2');
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
