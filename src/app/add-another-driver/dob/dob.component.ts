import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.scss'],
})
export class DobComponent implements OnInit {
  public singleDriverObj;
  public userEnterDate;
  public enableDisabled = true;
  dateError = true;
  public driverName;
  currentYear = new Date().getFullYear();
  year = this.currentYear - 16;
  dateOfBirth = new FormGroup({
    dob : new FormControl('')
  });

  get birth() {
    return this.dateOfBirth.get('dob');
  }

  constructor(private obj: JsonCommanObjectService, public toastController: ToastController) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    console.log('Service inside primary dob constructor : ', this.singleDriverObj);
    this.driverName = this.singleDriverObj.driverData.dFullName;
  }

  getUserDobNextClick() {
    const _dob = this.birth.value;
    // this.singleDriverObj.drivers[this.currentIndex].driverData.dDob = _dob;
    const formattedDate = _dob.slice(0, 2) + '/' + _dob.slice(2, 4) + '/' + _dob.slice(4, 8);
    console.log(formattedDate);
    this.singleDriverObj.driverData.dDob = formattedDate;
    console.log('Add another driver DOB, NEXT on button click');
    console.log(this.singleDriverObj);
  }

  validateDate(event) {
    this.userEnterDate = event.target.value;
    console.log('User Enter Date : ', this.userEnterDate)
    const reg = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

    const result =  reg.test((this.userEnterDate));
    console.log(result);

    if (result) {
      this.enableDisabled = false;
    } else {
      this.enableDisabled = true;
    }

  }

  ngOnInit() {
    if (this.singleDriverObj.driverData.dDob) {

      this.dateOfBirth.setValue({
        dob : this.singleDriverObj.driverData.dDob,
      });
      const reg = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

      const result =  reg.test((this.singleDriverObj.driverData.dDob));
      if (result) {
        this.enableDisabled = false;
      } else {
        this.enableDisabled = true;
      }
    }
  }
  async getErrorTost() {
    const toast = await this.toastController.create({
      message: 'Please enter Date of birth !',
      duration: 2000
    });
    toast.present();
  }
  validateDOB(event) {
    const userEnteredDOB = event.target.value;
    if (userEnteredDOB.length > 0) {
      this.dateError = false;
    }
  }

}
