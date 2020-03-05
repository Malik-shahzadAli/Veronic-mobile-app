import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { NgOtpInputModule } from  'ng-otp-input';
// import Swal from 'sweetalert2';
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
  otpForm = new FormGroup({
    phoneNo:new FormControl(undefined),
    first : new FormControl(undefined),
    sec:new FormControl(undefined),
    third:new FormControl(undefined),
    fourth:new FormControl(undefined)
  });
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
///////////////////
otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput',{static: false}) ngOtpInput: any;
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
  next(el, value , back) {
    console.log(el , value, back);
    if (value !== '') {
      el.setFocus();
    } else {
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

  // ENTER AND VALIDATE OTP
  onOtpChange(otp) {
    // this.countdown.stop();
    // console.log(otp.length);
    // const regex = /\b\d{4}\b/g;
    // const result =  regex.test(otp);
    // if (result) {
      // this.validOTP = otp;
      // this.isNextBtnDisabled = false;
    // } else {
      // this.isNextBtnDisabled = true;
    // }
  }
  //  EVENT HANDLER, WHEN COUNTER IS ZERO
  handleEvent(e: CountdownEvent) {
    console.log('Event Trigger : ', e);
    if (e['left'] === 0) {
      console.log('Time is going to ZERO');
      this.resendBtnHide = true;
    }
  }
  constructor(private obj: JsonCommanObjectService, private http: HttpClient, private router: Router) {
    this.finalObj = this.obj.customerDetails();
  }
  // RE-SEND OTP, FUNCTION
  resendOTP() {
   
    if (this.counter < 3) {
    this.http.post('https://www.staging.admin.veronicasquote.com/api/otp/generate',{"phoneNo" : this.finalObj.customer.customerData.phone})
      .subscribe((response) => {
        // console.log("Server Response, Resend OTP");
        console.log(response);
        this.countdown.restart();
        this.resendBtnHide = false;
        this.counter++;
        // this.router.navigate(['/apply/otp']);
      },
      (err) => {
        if (err.error.message) {
        // Swal.fire({
        //   icon: 'error',
        //   text: 'Invalid data for field Phone Number',
        // })
      }
      });
    } else {
      // Swal.fire({
      //   icon: 'error',
      //   text: 'Please contact our support team',
      // }).then((result)=>{
      //   // window.location.reload();
      // })
    }
  }
  // VALIDATE OTP
  validateOTP() {
    console.log(this.otpForm.value);
  // this.spinnerShowHide = false;
  // console.log(this.finalObj.customer.customerData.phone);
  // console.log(this.validOTP);
  // this.http.post('https://www.staging.admin.veronicasquote.com/api/otp/verify',
  //  {"phoneNo" : this.finalObj.customer.customerData.phone, "otp" : this.validOTP})
  //   .subscribe((response) => {
  //   console.log('Server Response, validate OTP');
  //   this.spinnerShowHide = true;
  //   console.log(response);
  //   this.countdown.stop();
  //   // this.router.navigate(['/apply/driver-splash']);
  // },
  // (err) => {
  //   // this.spinnerShowHide = true;
  //   console.log(err);
  //   if (err.error.message) {
  //     console.log(err.error.message);
  //       // Swal.fire({
  //       //   icon: 'error',
  //       //   text: err.error.message,
  //       // })
  //     }
  // });
  }
  ngOnInit() {
    this.StartTimer();
    if ((this.finalObj.customer.customerData.phone)) {
      this.otpForm.setValue({
        phoneNo : this.finalObj.customer.customerData.phone
      });
    }
  }
}