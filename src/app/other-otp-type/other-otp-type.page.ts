import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/commonurl/commonurl';
import { Router } from '@angular/router';
@Component({
  selector: 'app-other-otp-type',
  templateUrl: './other-otp-type.page.html',
  styleUrls: ['./other-otp-type.page.scss'],
})
export class OtherOtpTypePage implements OnInit {

  public finalObj;
  public selectedValue;
  public dropDownSelected = true;
  public select = false;
  modelText = '';
  homeOwnerStatusArray = [
    {status : 'SMS', value : 'SMS'},
    {status: 'CALL', value : 'CALL'}
  ];
  typeOfOtp = new FormGroup({
    otpType : new FormControl('', [
      Validators.required
    ])
  });
  get homeOwnerStatus() {
    return this.typeOfOtp.get('otpType');
  }
  constructor(private obj: JsonCommanObjectService,
              private translate: TranslateService,
              private toastController: ToastController,
              public loadingController: LoadingController,
              private http: HttpClient,private router: Router) {
    this.finalObj = this.obj.quteData();
    console.log('Inside HomeOwner Component : ', this.finalObj);
  }

  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }

  getUserHomeOwnerStatusNextClick() {
    // const homeOwnerStatus = this.homeOwnerStatus.value;
    // console.log('HomeOwner selected value : ', homeOwnerStatus);
    // this.finalObj.customer.customerData.homeOwner = this.selectedValue;
    console.log('getUserHomeOwnerStatusNextClick Function called');
    let newPhone = this.finalObj.quoteData.customer.customerData.phone;
    this.http.post(url.baseurl + '/api/get/otp', {
      "phoneNo" : newPhone,
      "channel": this.selectedValue
    })
      .subscribe((response) => {
        this.loadingController.dismiss('login');
        console.log('Server Response, validate Phone Number and send OTP');
        console.log(response);
        this.router.navigate(['/other-otp']);
        // this.finalObj.customer.customerData.email = emailAddress;
        // this.finalObj.customer.customerData.phone = '+1'+phone;
      },
      (error) => {
        this.loadingController.dismiss('login');
        console.log(error);
        if (error.error.hasError) {
          // this.errorMessage = error.error.message;
          console.log('Error Here');
          // this.invalidPhone();
        }
      });
    console.log(this.finalObj);
    // console.log(this.finalObj);
  }
  ngOnInit() {
    this.finalObj;
    // if ((this.finalObj.customer.customerData.homeOwner !== undefined) && (this.finalObj.customer.customerData.homeOwner !== '')) {
    //   this.typeOfOtp.patchValue({
    //     otpType : this.finalObj.customer.customerData.homeOwner,
    //   });
      this.dropDownSelected = false;
    // }
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
