import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-other-primary-name',
  templateUrl: './other-primary-name.page.html',
  styleUrls: ['./other-primary-name.page.scss'],
})
export class OtherPrimaryNamePage implements OnInit {

  private finalObj;
  progressBar = true;
  public firstNameError = true;
  public lastNameError = true;

  public nextBtnEnableDisable = true;
  constructor( public translate: TranslateService,
               private obj: JsonCommanObjectService,
               public toastController: ToastController,
               public loadingController: LoadingController) {
    this.finalObj = this.obj.quteData();
    console.log('Service inside primary  constructor : ', this.finalObj);
   }
  primaryName = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  get firstname() {
    return this.primaryName.get('firstName');
  }
  get lastname() {
    return this.primaryName.get('lastName');
  }
  ngOnInit() {
    // console.log('ion view start');
    // console.log(this.primaryName);
    // if (((this.finalObj.customer.customerData.firstName) !== '') &&  ((this.finalObj.customer.customerData.firstName) !== '')) {

    //   this.firstNameError = false;
    //   this.lastNameError = false;
    //   this.nextBtnEnableDisable = false;

    //   this.primaryName.setValue({
    //     firstName : this.finalObj.customer.customerData.firstName,
    //     lastName : this.finalObj.customer.customerData.lastName
    //   });
    // }
  }
  validateFirstname(e) {
    const userEnteredFirstName = e.target.value;
    if (userEnteredFirstName.length < 3) {
      this.firstNameError = true;
    } else {
      this.firstNameError = false;
    }
    if (this.firstNameError || this.lastNameError) {
      this.nextBtnEnableDisable = true;
    } else {
      this.nextBtnEnableDisable = false;
    }
    // if (typeof e !== 'string') return '';
    // return e.charAt(0).toUpperCase() + e.slice(1);
  }
  validateLastname(e) {
    const userEnteredLastName = e.target.value;
    if (userEnteredLastName.length < 3) {
      this.lastNameError = true;
    } else {
      this.lastNameError = false;
    }
    if (this.firstNameError || this.lastNameError) {
      this.nextBtnEnableDisable = true;
    } else {
      this.nextBtnEnableDisable = false;
    }
  }
  getUserNameNextClick() {
    const firstName = this.primaryName.value.firstName;
    const lastName = this.primaryName.value.lastName;
    this.finalObj.quoteData.customer.customerData.firstName= firstName;
    this.finalObj.quoteData.customer.customerData.lastName = lastName;

    console.log('Click getUserNameNextClick Function');
    console.log(this.finalObj);
  }
  async getErrorTost() {
    const toast = await this.toastController.create({
      message: 'Please enter first name and last name !',
      duration: 2000
    });
    toast.present();
  }
  ionViewDidEnter(){
    // console.log('loaded completely')
  }
  async presentAlert() {

    const loading = await this.loadingController.create({
      message: '',
      id: 'alert'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}