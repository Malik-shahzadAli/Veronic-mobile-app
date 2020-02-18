import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
@Component({
  selector: 'app-driver-education',
  templateUrl: './driver-education.page.html',
  styleUrls: ['./driver-education.page.scss'],
})
export class DriverEducationPage implements OnInit {
  public finalObj;
  public selectedValue;
  public dropDownSelected = true;

  educationStatusArray = [
    {status: 'High school or GED', value : 'H'},
    {status : 'Associate degree | Certification | Diploma', value : 'A'},
    {status : 'Bachelor\'s degree', value : 'B'},
    {status : 'Graduate or professional degree', value : 'S'}
  ];

  driverEducation = new FormGroup({
    education : new FormControl('', [
      Validators.required
    ])
  });
  get educationStatus() {
    return this.driverEducation.get('education');
  }

  constructor(private obj: JsonCommanObjectService) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside Education Component : ', this.finalObj);
   }
   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;

  }
  getUserEducationNextClick() {
    const driverEducation = this.educationStatus.value;
    console.log('Driver Education selected value : ', driverEducation);
    this.finalObj.customer.customerData.edu = driverEducation;
    console.log('getUserEducationNextClick Function calle');
    console.log(this.finalObj);
  }
  ngOnInit() {
    if ((this.finalObj.customer.customerData.edu !== undefined) && (this.finalObj.customer.customerData.edu !== '')) {

      this.driverEducation.patchValue({
        education : this.finalObj.customer.customerData.edu,
      });
      this.dropDownSelected = false;

    }
  }

}
