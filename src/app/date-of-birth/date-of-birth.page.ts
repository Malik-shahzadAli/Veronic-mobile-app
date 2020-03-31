import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.page.html',
  styleUrls: ['./date-of-birth.page.scss'],
})
export class DateOfBirthPage implements OnInit {
  dateError = true;
  public date;
  constructor(public translate: TranslateService,
              private obj: JsonCommanObjectService,
              public toastController: ToastController,
              public loadingController: LoadingController) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside Data-Of-Birth Constructor : ', this.finalObj);

  }

  public finalObj;
  public userEnterDate;
  public enableDisabled = true;
  currentYear = new Date().getFullYear();
  year = this.currentYear - 16;

  dateOfBirth = new FormGroup({
    dob : new FormControl('', [
    ])
  });

  ngOnInit() {
    this.loading2();
    // const d = '02161984';
    // const month = d.slice(0, 2);
    // const day = d.slice(2, 4);
    // const year = d.slice(4);
    // this.date = month + '-' + day + '-' + year;
    // this.finalObj.customer.customerData.dob
    if (this.finalObj.customer.customerData.dob !== '') {
      this.dateError = false;
    }
  }
  get birth() {
    return this.dateOfBirth.get('dob');
  }
  getUserDobNextClick() {
    const dateOfBirth = this.birth.value;
    console.log( typeof dateOfBirth);


    // let formattedDate = dateOfBirth.slice(0, 2) + "/" + dateOfBirth.slice(2, 4) + "/" + dateOfBirth.slice(4, 8);
    // console.log(formattedDate)


    this.finalObj.customer.customerData.dob = dateOfBirth;
    // this.finalObj.customer.customerData.dob = this.userEnterDate; 
    // console.log("Click getUserDOBNextClick Function");
    console.log(this.finalObj);
  }
  validateDOB(event) {
    const userEnteredDOB = event.target.value;
    if (userEnteredDOB.length > 0) {
      this.dateError = false;
    }

  }
  async getErrorTost() {
    const toast = await this.toastController.create({
      message: 'Please enter Date of birth !',
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
