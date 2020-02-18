import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage implements OnInit {
  public singleCarObj;
  public selectedValue;
  public isDisabled = true;
  vehicleInfo = new FormGroup({
    entryVehicle: new FormControl('')
  });
  constructor(private obj: JsonCommanObjectService, private router: Router) {
    this.singleCarObj = obj.carObjTemplate;
  }
  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    if (this.selectedValue === 'year_make_model' || this.selectedValue === 'vin') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;

    }
  }

  vehicleBasicInfoNextClick() {
    if (this.selectedValue === 'year_make_model') {
      this.router.navigate(['/add-vehicle-by-year-make-model']);
    } else if (this.selectedValue === 'vin') {
      this.router.navigate(['/add-vehicle-by-vin']);
    }
  }

  ngOnInit() {
  }

}
