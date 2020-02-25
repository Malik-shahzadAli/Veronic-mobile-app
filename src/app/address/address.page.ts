import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor(private obj: JsonCommanObjectService,
              private http: HttpClient,
              public toastController: ToastController,
              private translate: TranslateService) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside address Constructor : ', this.finalObj);
   }
  public url = 'https://www.admin.veronicasquote.com/api';
  private finalObj;

  public addressError = true;
  public zipCodeError = true;
  modelText = '';

  public nextBtnEnableDisabled = true;
  driverAddress = new FormGroup({
    street : new FormControl(''),
    zipCode : new FormControl('')
  });

  get streetAddress() {
    return this.driverAddress.get('street');
  }
  get zipcode() {
    return this.driverAddress.get('zipCode');
  }
  ngOnInit() {
    if (((this.finalObj.customer.customerData.streetAddress) !== '') && ((this.finalObj.customer.customerData.zipCode) !== '')) {
      this.zipCodeError = false;
      this.addressError = false;
      this.nextBtnEnableDisabled = false;

      this.driverAddress.setValue({
        street : this.finalObj.customer.customerData.streetAddress,
        zipCode : this.finalObj.customer.customerData.zipCode,
      });
    }
  }
  validateZipCode(e) {
    const userEnteredZip = e.target.value;
    const regex = /^\d{5}(-\d{4})?$/;
    console.log(userEnteredZip);

    const result =  regex.test((userEnteredZip));
    console.log(result);
    if (result) {
      this.http.post(this.url + '/zip/validate', {"zipCode" : userEnteredZip})
      .subscribe((response) => {
        console.log('Server Response, after validating ZIP');
        console.log(response);
        this.zipCodeError = false;
        this.enableDisableNextBtn();
      },
      (error) => {
        if (error.error.hasError) {
          this.zipCodeError = true;
          this.enableDisableNextBtn();
        }
      });
    } else {
      this.zipCodeError = true;
    }

    console.log(this.addressError, this.zipCodeError);
  }
  validateAddress(e) {
    const userEnteredAddress = e.target.value;
    const regex = /^\d+\s[A-z]+\s[A-z]+/g;
    console.log(userEnteredAddress);

    const result =  regex.test((userEnteredAddress));
    console.log(result);
    if (result) {
      const address = userEnteredAddress + ', CA ' + this.zipcode.value;
      this.http.post(this.url + '/address/validate', {'streetAddress' : address})
      .subscribe((response) => {
        console.log('Server Response, validate Address');
        console.log(response);
        this.addressError = false;
        this.enableDisableNextBtn();
      },
      (error) => {
        console.log(error);
        if (error.error.hasError) {
          this.addressError = true;
          this.enableDisableNextBtn();
        }
      });
    } else {
      this.addressError = true;
    }

    console.log(this.addressError, this.zipCodeError);

    if (this.addressError || this.zipCodeError) {
      this.nextBtnEnableDisabled = true;
    } else {
      this.nextBtnEnableDisabled = false;
    }
  }

  getUserAddressNextClick() {
    const streetAddress = this.streetAddress.value;
    const zipCode = this.zipcode.value;

    this.finalObj.customer.customerData.streetAddress = streetAddress;
    this.finalObj.customer.customerData.zipCode = zipCode;
    console.log('Click getUserDOBNextClick Function');
    console.log(this.finalObj);
  }

  enableDisableNextBtn() {
    if (this.addressError || this.zipCodeError) {
      this.nextBtnEnableDisabled = true;
      this.addressError = true;
    } else {
      this.nextBtnEnableDisabled = false;
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

}
