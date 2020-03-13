import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OTPPage implements OnInit {
  public finalObj;
  public resendBtnHide = false;
  public counter = 1;
  public isNextBtnDisabled = true;
  public validOTP;
  public spinnerShowHide = true;
  public maxtime: any = 10;
  public timer;
  // public first = true;
  public sec = true;
  public third = true;
  public forth = true;
  public number;
  otpForm = new FormGroup({
    otp: new FormControl(),
    // first: new FormControl(undefined),
    // sec: new FormControl(undefined),
    // third: new FormControl(undefined),
    // fourth: new FormControl(undefined)
  });
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
///////////////////
otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', {static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '4',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  next(el, value , back, next) {

    if (value !== '') {
      if (next === 'sec') {
        console.log('sec');
        this.sec = false;
      } else if (next === 'third') {
        console.log('th');
        this.third = false;
      } else if (next === 'forth') {
        console.log('f');
        this.forth = false;
      }
      setTimeout(() => {  el.setFocus(); console.log('out'); }, 100);
    } else {
      if (next === 'five') {
        this.forth = true;
      } else if (next === 'forth') {
        this.third = true;
      } else if (next === 'third') {
        this.sec = true;
      }
      back.setFocus();
    }
  }

  StartTimer() {
    this.timer = setTimeout(x => {
          if (this.maxtime <= 0) { }
          this.maxtime -= 1;
          if (this.maxtime > 0) {
            console.log(this.maxtime);
            this.StartTimer();
          } else {
              console.log('complete');
          }
      }, 1000);
  }


  //  EVENT HANDLER, WHEN COUNTER IS ZERO
  handleEvent(e: CountdownEvent) {
    console.log('Event Trigger : ', e);
    if (e['left'] === 0) {
      console.log('Time is going to ZERO');
      this.resendBtnHide = true;
    }
  }
  constructor(private obj: JsonCommanObjectService,
              private http: HttpClient, private router: Router,
              private toastController: ToastController,
              public loadingController: LoadingController, public alertController: AlertController) {
    this.finalObj = this.obj.customerDetails();
  }
  // RE-SEND OTP, FUNCTION
  resendOTP() {
    if (this.counter < 3) {
    this.presentAlert();
    this.http.post('https://www.staging.admin.veronicasquote.com/api/otp/generate',{"phoneNo" : this.finalObj.customer.customerData.phone})
      .subscribe((response) => {
        console.log(response);
        this.countdown.restart();
        this.resendBtnHide = false;
        this.counter++;
      },
      (err) => {
        if (err.error.message) {
          this.getErrorTost('Invalid data for field Phone Number');
          this.loadingController.dismiss('login');
      }
      });
    } else {
      // this.contactUs();
      this.contactUs();
      this.loadingController.dismiss('login');
    }
  }
  // VALIDATE OTP
  validateOTP() {
    console.log(this.otpForm.value.otp);
    console.log('NUMBER----' + this.finalObj.customer.customerData.phone);
    this.presentAlert();
    this.http.post('https://www.staging.admin.veronicasquote.com/api/otp/verify',
   {"phoneNo" : this.finalObj.customer.customerData.phone, "otp" : this.otpForm.value.otp})
    .subscribe((response) => {
    // console.log('Server Response, validate OTP');
    this.spinnerShowHide = true;
    // console.log(response);
    this.loadingController.dismiss('login');
    // this.router.navigateByUrl('/driver-splash');
    this.router.navigate(['/driver-splash']);
  },
  (err) => {
    console.log(err);
    this.loadingController.dismiss('login');
    if (err.error.message) {
      console.log(err.error.message);
      this.getErrorTost(err.error.message);
      }
  });
  }
  ngOnInit() {
    console.log('NUMBER----' + this.finalObj.customer.customerData.phone);
    this.number = this.finalObj.customer.customerData.phone;
    // console.log(this.finalObj.customer.customerData.phone);
    // this.otpForm.setValue({phoneNo: this.finalObj.customer.customerData.phone});
    this.StartTimer();
    if ((this.finalObj.customer.customerData.phone)) {
      this.otpForm.setValue({
        // otp : this.finalObj.customer.customerData.phone
        otp: ''
      });
    }
  }
  async getErrorTost(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }
  async presentAlert() {
    const loading = await this.loadingController.create({
      // message: this.modelText,
      id: 'alert'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async contactUs() {
    const alert = await this.alertController.create({
      subHeader: 'Please contact our support team',
      buttons: [
        {
          text: 'Call us',
          cssClass: 'secondary',
          handler: (blah) => {
            window.location.href="tel:(800) 639-3939"
          }
        },{
          text: 'Chat with us',
          cssClass: 'secondary',
          handler: (blah) => {
            window.location.href="https://www.tidio.com/talk/fefv4irzl5mm0eropcqgncfpiiuj32mp"
          }
        }
      ]
    });
    await alert.present();
  }
  OTP(event) {
    if (event.target.value.length >= 4) {
      this.isNextBtnDisabled = false;
    } else {
      this.isNextBtnDisabled = true;
    }
  }
}