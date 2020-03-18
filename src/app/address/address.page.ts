import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  public url = 'https://www.admin.veronicasquote.com/api';
  private finalObj;
  public spinnerShowHide = true; // SPINNER HIDE/SHOW
  public addressError = true; // MEANS, ADDRESS IS REQUIRED
  public zipCodeError = true; // MEANS, ZIP IS REQUIRED
  public invalidZip = false; // ZIP PASS THROUGH REGEX OR NOT
  public notCAzip = false; // NOT 'CA' ZIP CODE
  public addressValidationError = false; // API RESPONSE, ADDRESS VALID OR NOT
  public nextBtnEnableDisabled = true;
  public validZip = false;
  public modelText = '';
  public scan = false;
  // public stateFromScan = false;
  driverAddress = new FormGroup({
    street : new FormControl(''),
    zipCode : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl('')
  });
  get streetAddress() {
    return this.driverAddress.get('street');
  }
  get zipcode() {
    return this.driverAddress.get('zipCode');
  }
  get city() {
    return this.driverAddress.get('city');
  }
  get state() {
    return this.driverAddress.get('state');
  }
  constructor(private obj: JsonCommanObjectService,
              private http: HttpClient, private router: Router,
              private toastController: ToastController,
              private translate: TranslateService, public loadingController: LoadingController) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside address Constructor : ', this.finalObj);
  }
  // Validate Zip Code
  validateZipCode(e) {
    const userEnteredZip = e.target.value;
    if (userEnteredZip !== '') {
      this.invalidZip = true;
      this.zipCodeError = false;
      this.notCAzip = false;
      this.driverAddress.setValue({
        city : '',
        state : '',
        zipCode : userEnteredZip,
        street : '',
      });
      this.enableDisableNextBtn();
    } else {
      this.zipCodeError = true;
      this.invalidZip = false;
      this.notCAzip = false;
      this.enableDisableNextBtn();
    }
    const regex = /^\d{5}(-\d{4})?$/;
    console.log(userEnteredZip);
    const result =  regex.test((userEnteredZip));
    console.log(result);
    if (result) {
      this.presentAlert();
      this.invalidZip = false;
      this.http.post(this.url + '/zip/validate', {"zipCode" : userEnteredZip})
      .subscribe((response) => {
        this.validZip = true;
        console.log('Server Response, after validating ZIP');
        console.log(response);
        this.loadingController.dismiss('login');
        this.notCAzip = false;
        this.invalidZip = false;
        this.zipCodeError = false;
        this.driverAddress.setValue({
          city : response['result'].city,
          state : response['result'].state,
          zipCode : response['result'].zipCode,
          street : '',
        });
        // this.enableDisableNextBtn();
      },
      (error) => {
        this.loadingController.dismiss('login');
        this.getInavlidZip();
        // console.log('check')
        if (error.error.hasError) {
          this.notCAzip = true;
          this.invalidZip = false;
          this.zipCodeError = false;
          this.driverAddress.reset();
          this.enableDisableNextBtn();
        }
      });
    } else {
      // this.zipCodeError = true;
    }
    console.log(this.addressError, this.zipCodeError);
  }
  // Validate Address
  validateAddress(e) {
    const userEnteredAddress = e.target.value;
    if (userEnteredAddress !== '') {
      this.addressValidationError = false;
      this.addressError = false;
      this.enableDisableNextBtn();
    } else {
      this.addressError = true;
      this.enableDisableNextBtn();
    }
  }
  // VALIDATE ADDRESS AND SAVE INTO OBJECT, ON NEXT BUTTON CLICK
  getUserAddressNextClick() {
    this.presentAlert();
    this.spinnerShowHide = false;
    const streetAddress = this.streetAddress.value;
    const zipCode = this.zipcode.value;
    const city = this.city.value;
    const state = this.state.value;
    const address = streetAddress + ', ' + city + ' ' + state + ' ' + zipCode;
    console.log('Entered Address : ', address);
    this.http.post(this.url + '/address/validate', {"streetAddress" : address})
      .subscribe((response) => {
        this.loadingController.dismiss('login');
        this.spinnerShowHide = true;
        console.log(response);
        this.finalObj.customer.customerData.streetAddress = streetAddress;
        this.finalObj.customer.customerData.zipCode = zipCode;
        this.finalObj.customer.customerData.city = city;
        this.finalObj.customer.customerData.state = state;
        this.router.navigate(['/contact-info']);
      },
      (error) => {
        this.loadingController.dismiss('login');
        this.getstreetError();
        this.spinnerShowHide = true;
        this.addressValidationError = true;
        console.log(error);
        if (error.error.hasError) {
          this.addressError = true;
          this.enableDisableNextBtn();
        }
      });
  }
  enableDisableNextBtn() {
    if ( this.notCAzip || this.invalidZip || this.zipCodeError || this.addressError) {
      this.nextBtnEnableDisabled = true;
    } else {
      this.nextBtnEnableDisabled = false;
    }
  }
  ngOnInit() {
    if(((this.finalObj.customer.customerData.streetAddress) !== "") && ((this.finalObj.customer.customerData.zipCode) !== "") && ((this.finalObj.customer.customerData.city) !== "") && ((this.finalObj.customer.customerData.city) !== "")){
      console.log("*********** Here **********");
      // this.addressInputFieldDisabled = false;
      this.scan = true;
      this.zipCodeError = false;
      this.addressError = false;
      this.invalidZip = false;
      this.notCAzip = false;
      this.addressValidationError = false;
      this.nextBtnEnableDisabled = false;
      this.driverAddress.setValue({
        street : this.finalObj.customer.customerData.streetAddress,
        zipCode : this.finalObj.customer.customerData.zipCode,
        city : this.finalObj.customer.customerData.city,
        state : this.finalObj.customer.customerData.state
      });

    }
  }
  async getErrorTost() {
    this.translate.get('Address.popUpError').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const toast = await this.toastController.create({
      message: this.modelText,
      duration: 2000
    });
    toast.present();
  }

  async getInavlidZip() {
    this.translate.get('Address.calforniaZip').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const toast = await this.toastController.create({
      message: this.modelText,
      duration: 2000
    });
    toast.present();

  }
  async getstreetError() {
    this.translate.get('Address.error').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const toast = await this.toastController.create({
      message: this.modelText,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
    this.translate.get('wait.title').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const loading = await this.loadingController.create({
      message: this.modelText,
      id: 'alert'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}