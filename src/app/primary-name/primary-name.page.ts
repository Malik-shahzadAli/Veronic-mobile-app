import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
@Component({
  selector: 'app-primary-name',
  templateUrl: './primary-name.page.html',
  styleUrls: ['./primary-name.page.scss'],
})
export class PrimaryNamePage implements OnInit {

  private finalObj;
  progressBar = true;
  public firstNameError = true;
  public lastNameError = true;

  public nextBtnEnableDisable = true;
  constructor( public translate: TranslateService, private obj: JsonCommanObjectService ) {
    this.finalObj = this.obj.customerDetails();
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
    if (((this.finalObj.customer.customerData.firstName) !== '') &&  ((this.finalObj.customer.customerData.firstName) !== '')) {

      this.firstNameError = false;
      this.lastNameError = false;
      this.nextBtnEnableDisable = false;

      this.primaryName.setValue({
        firstName : this.finalObj.customer.customerData.firstName,
        lastName : this.finalObj.customer.customerData.lastName
      });
    }
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

    this.finalObj.customer.customerData.firstName = firstName;
    this.finalObj.customer.customerData.lastName = lastName;

    console.log('Click getUserNameNextClick Function');
    console.log(this.finalObj);
  }
}
