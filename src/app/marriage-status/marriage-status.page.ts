import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';

@Component({
  selector: 'app-marriage-status',
  templateUrl: './marriage-status.page.html',
  styleUrls: ['./marriage-status.page.scss'],
})
export class MarriageStatusPage implements OnInit {

  public finalObj;
  public selectedValue;
  public customerFirstName;
  public dropDownSelected = true;
  maritalStatusArray = [
    {status : 'Single', value : 'S'},
    {status: 'Married', value : 'M'},
    {status : 'Divorced', value : 'D'},
    {status : 'Widowed', value : 'W'},
    {status : 'Other', value : 'E'},
    {status : 'Complicated', value : 'E'}
  ];
  public desiredValue = this.maritalStatusArray[1];
  genderAndMartialStatus = new FormGroup({
    martialStatus : new FormControl('', [
      Validators.required
    ])
  });
  get maritalStatus() {
    return this.genderAndMartialStatus.get('martialStatus');
  }
  constructor(private obj: JsonCommanObjectService) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside MaritalStatus Component : ', this.finalObj);
    this.customerFirstName = this.finalObj.customer.customerData.firstName;
   }
   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
  }

  getUserMaritalStatusNextClick(){
    console.log('Marital-Status value selected : ', this.selectedValue);
    this.finalObj.customer.customerData.maritalStatus = this.selectedValue;
    console.log('Click getUserMaritalStatusNextClick Function');
    console.log(this.finalObj);
  }

  ngOnInit() {
    if ((this.finalObj.customer.customerData.maritalStatus !== undefined) && this.finalObj.customer.customerData.maritalStatus !== '') {

      this.genderAndMartialStatus.patchValue({
        martialStatus : this.finalObj.customer.customerData.maritalStatus,
      });
      this.customerFirstName = this.finalObj.customer.customerData.firstName;
      this.dropDownSelected = false;
    }
  }
}
