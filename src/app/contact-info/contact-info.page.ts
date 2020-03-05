import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.page.html',
  styleUrls: ['./contact-info.page.scss'],
})
export class ContactInfoPage implements OnInit {
  public errorMessage = '';
  constructor(private obj: JsonCommanObjectService, private http: HttpClient ,
              private translate: TranslateService, private toastController: ToastController ) {
    this.finalObj = this.obj.customerDetails();
   }
  public finalObj;
  public userEnteredEmail;
  public userEnteredPhone;
  public enableDisabled = true;
  public validPhoneEnableDisabled = true;

  public bothValidation = true;
  modelText = '';
  contactInfo = new FormGroup({
    email : new FormControl('', [
      Validators.required
    ]),
    phone : new FormControl('', [
      Validators.required
    ])
  });
  get emailAddress() {
    return this.contactInfo.get('email');
  }
  get phoneNumber() {
    return this.contactInfo.get('phone');
  }
  validateEmail(event) {
    this.userEnteredEmail = event.target.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result =  re.test(String(this.userEnteredEmail).toLowerCase());

    if (result) {
      this.enableDisabled = false;
    } else {
      this.enableDisabled = true;
    }

    if (!this.enableDisabled && !this.validPhoneEnableDisabled) {
      this.bothValidation = false;
    } else {
      this.bothValidation = true;
    }
  }

  validatePhone(event) {
    this.userEnteredPhone = event.target.value;
    const re = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    const result =  re.test(String(this.userEnteredPhone));
    if (result) {
      this.validPhoneEnableDisabled = false;
    } else {
      this.validPhoneEnableDisabled = true;
    }
    if (!this.enableDisabled && !this.validPhoneEnableDisabled) {
      this.bothValidation = false;
    } else {
      this.bothValidation = true;
    }
  }

  getUserContactInfoNextClick() {
      // this.spinnerShowHide = false;
      const emailAddress = this.emailAddress.value;
      const phoneNumber = this.phoneNumber.value;
      const phone = this.formatPhoneNumber(phoneNumber);
      console.log('Next btn phone : ', phone);
      this.http.post('https://www.staging.admin.veronicasquote.com/api/otp/generate', {"phoneNo" : '+923086111049'})
        .subscribe((response) => {
          console.log('Server Response, validate Phone Number and send OTP');
          console.log(response);
          this.finalObj.customer.customerData.email = emailAddress;
          // this.finalObj.customer.customerData.phone = phone;
          this.finalObj.customer.customerData.phone = '+923086111049';
        },
        (error) => {
          console.log(error);
          if (error.error.hasError) {
             this.errorMessage = error.error.message;
            console.log('Error Here');
          }
        });
      console.log(this.finalObj);
  }
  ngOnInit() {
  }
  formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      const intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }
  async getErrorTost() {
    this.translate.get('ContactInfo.popUpError').
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
