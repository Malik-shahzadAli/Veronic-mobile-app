import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { url } from 'src/commonurl/commonurl';
@Component({
  selector: 'app-referred-person',
  templateUrl: './referred-person.page.html',
  styleUrls: ['./referred-person.page.scss'],
})
export class ReferredPersonPage  implements OnInit{
  public finalObjectSendToServer;
  public url = url.baseurl+'/api/quotes/generate';
  public isNameRequired = true;
  public isPhoneRequired = true;
  public NameValidate = false;
  public phoneValidate = false;
  public bothValidation = true;
  public modelText = '';
  referredPerson = new FormGroup({
    name : new FormControl('', [
      Validators.required
    ]),
    phone : new FormControl('', [
      Validators.required
    ])
  });
  get name() {
    return this.referredPerson.get('name');
  }
  get phoneNumber() {
    return this.referredPerson.get('phone');
  }
  constructor(private router: Router, private obj: JsonCommanObjectService,
              private http: HttpClient, private toastController: ToastController,
              private translate: TranslateService, public loadingController: LoadingController) {
    this.finalObjectSendToServer = this.obj.customerDetails();
  }
  validateReferredName(event) {
    const userEnteredName = event.target.value;
    if (userEnteredName === '') {
      this.isNameRequired = true;
      this.NameValidate = false;
      this.getQuoteBtnEnableDisabled();
    } else {
      if (userEnteredName.length < 3) {
        this.isNameRequired = false;
        this.NameValidate = true;
        this.getQuoteBtnEnableDisabled();
      } else {
        this.isNameRequired = false;
        this.NameValidate = false;
        this.getQuoteBtnEnableDisabled();
      }
    }
    this.getQuoteBtnEnableDisabled();
  }
  validatePhone(event) {
    const userEnteredPhone = event.target.value;
    if (userEnteredPhone === '') {
      this.isPhoneRequired = true;
      this.phoneValidate = false;
      this.getQuoteBtnEnableDisabled();
    } else {
      const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
      const result =  regex.test(String(userEnteredPhone));
      if (result) {
        this.presentAlert();
        this.http.post(url.baseurl+'/api/validate/ref', {"phoneNo" : '+1 '+userEnteredPhone})
        .subscribe((response) => {
          console.log('Response from the server : ');
          this.loadingController.dismiss('login');
          console.log(response);
          this.phoneValidate = false;
          this.isPhoneRequired = false;
          this.getQuoteBtnEnableDisabled();
        },
        (err) => {
          this.loadingController.dismiss('login');
          let errorstatus=err['status']
          if(errorstatus == 406){
            this.getErrorTost("Please enter a valid number");
          }else if(errorstatus == 409){
            this.getErrorTost("This number is already used for reference");
          }else{
            this.getErrorTost("Please enter a valid number");
          }
          // console.log()
          // this.getErrorTost(err.status);
          this.phoneValidate = true;
          this.isPhoneRequired = false;
          this.getQuoteBtnEnableDisabled();
        });
      } else {
        this.phoneValidate = true;
        this.isPhoneRequired = false;
      }
    }
    this.getQuoteBtnEnableDisabled();
  }
  getQuote() {
    this. presentAlert();
    const referredName = this.name.value;
    const referredPhone = this.formatPhoneNumber(this.phoneNumber.value);
    console.log('Refered Phone No : ', referredPhone);
    this.finalObjectSendToServer.ref.fullName = referredName;
    this.finalObjectSendToServer.ref.phone = '+1' + referredPhone;
    // REMOVING STATE AND CITY FROM FINAL OBJECT
    delete this.finalObjectSendToServer.customer.customerData.city;
    delete this.finalObjectSendToServer.customer.customerData.state;
    // this.dialog.open(LoadingAlertComponent,{ disableClose: true, width : '400px' });
    this.http.post(this.url, {"quoteData" : this.finalObjectSendToServer})
    .subscribe((response) => {
      this.loadingController.dismiss('alert');
      // console.log("Response from the server : ");
      console.log(response);
      this.obj.quotes = response;
      // this.dialog.closeAll();
      this.router.navigate(['/get-a-quote']);
    },
    (err) => {
      this.loadingController.dismiss('alert');
      console.log('Error : ', err);
    });
  }
  getQuoteBtnEnableDisabled() {
    if (this.isNameRequired || this.NameValidate || this.isPhoneRequired || this.phoneValidate) {
      console.log('HERE')
      this.bothValidation = true;
    } else {
      this.bothValidation = false;
    }
  }
  formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      const intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }
  async presentAlert() {
    this.translate.get('popup.title').
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
  async getErrorTost(error) {
    // let mes = '';
    // if(error == 406){
    //   mes= "Please enter a valid number"
    // }else if(error == 409){
    //   mes= "This number is already used for reference"
    // }
    const toast = await this.toastController.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
    // this.loading2();
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

