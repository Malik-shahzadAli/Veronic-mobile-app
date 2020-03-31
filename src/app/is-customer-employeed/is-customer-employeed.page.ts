import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-is-customer-employeed',
  templateUrl: './is-customer-employeed.page.html',
  styleUrls: ['./is-customer-employeed.page.scss'],
})
export class IsCustomerEmployeedPage implements OnInit {

  public singleDriverObj;
  public dropDownSelected = true;
  public gettingDriverEmployedStatusFromSingleDriverObj;
  public driverName;

  public select = false;
  public modelText = '';

  public selectedValue;
  public currentIndex;
  public finalObj;
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

  constructor(private obj: JsonCommanObjectService,
              private toastController: ToastController,
              private translate: TranslateService,public loadingController: LoadingController) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside Data-Of-Birth Constructor : ', this.finalObj);
   }

   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }
    getDriverIsEmployedNextClick() {
      this.finalObj.customer.customerData.isEmployed = this.selectedValue;
      console.log('getUserEducationNextClick Function called');
      console.log(this.finalObj);
    }
  ngOnInit() {
    this.loading2();
    if ( this.finalObj.customer.customerData.isEmployed ) {
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
