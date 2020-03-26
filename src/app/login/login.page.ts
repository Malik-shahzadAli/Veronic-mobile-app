import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/commonurl/commonurl';
import { LoadingController } from '@ionic/angular';
// import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userEnteredPhone;
  public validPhoneEnableDisabled = true;
  constructor(public toastController: ToastController, private http: HttpClient,
              public loadingController: LoadingController,public router: Router) { }
  loginNumber = new FormGroup({
    phoneNo: new FormControl('')
  });
  ngOnInit() {
  }
  get phoneNumber() {
    return this.loginNumber.get('phoneNo');
  } 
  validatePhone(event) {
    this.userEnteredPhone = event.target.value;
    if (this.userEnteredPhone.length >= 14) {
      this.validPhoneEnableDisabled = false;
    } else {
      this.validPhoneEnableDisabled = true;
    }
  }
  async getErrorTost() {
    const toast = await this.toastController.create({
      message: 'Please enter valid phone number.',
      duration: 2000
    });
    toast.present();
  }
  nextButtonClick(){
    // console.log('Hello working ')
    // 
    this.loading();
    const phoneNumber = this.phoneNumber.value;
    const phone = this.formatPhoneNumber(phoneNumber);
    console.log(phone)
    const newPhone = '+1' + phone;
    // const newPhone = '+923086111049';
    window.localStorage.setItem('loginNo', newPhone);
    this.http.post(url.baseurl + '/api/get/otp', {"phoneNo" : newPhone})
    .subscribe((response) => {
      this.loadingController.dismiss('login');
      console.log('Server Response, validate Phone Number and send OTP');
      console.log(response);
      this.router.navigate(['/login-otp']);
      // this.finalObj.customer.customerData.email = emailAddress;
      // this.finalObj.customer.customerData.phone = phone;
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

    // 
  }

  async loading() {
    // this.translate.get('popup.title2').
    // subscribe((text: string) => {
    //   this.modelText = text;
    // });
    const loading = await this.loadingController.create({
      message: '',
      // name: "circular",
      backdropDismiss: true,
      // color: 'danger';
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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
}
