import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';

@Component({
  selector: 'app-add-another-driver',
  templateUrl: './add-another-driver.page.html',
  styleUrls: ['./add-another-driver.page.scss'],
})
export class AddAnotherDriverPage implements OnInit {
  public finalObj;
  isDisplay = true;
  customerFirstName;
  public existingListOfDrivers;

  anotherDriver = new FormGroup({
    choose : new FormControl('')
  });
  constructor(private router: Router, private obj: JsonCommanObjectService) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside add-another-driver Component : ', this.finalObj);
    this.existingListOfDrivers = this.finalObj.drivers;
  }

  addAnotherDriver() {
    this.router.navigate(['/add-another-driver/secondry-driver-info']);
  }
  ngOnInit() {
    this.customerFirstName = (this.finalObj.customer.customerData.firstName).toUpperCase();

  }
}
