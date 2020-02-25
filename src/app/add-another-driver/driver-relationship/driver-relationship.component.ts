import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-driver-relationship',
  templateUrl: './driver-relationship.component.html',
  styleUrls: ['./driver-relationship.component.scss'],
})
export class DriverRelationshipComponent implements OnInit {

  public singleDriverObj;
  public dropDownSelected = true;
  public gettingDriverNameFromSingleDriverObj;
  public select = false;
  public selectedValue;
  public modelText = '';

  relationShipStatusArray = [
    {status: 'Child', value : 'C'},
    {status : 'Spouse', value : 'S'}
  ];
  relationshipStatus = new FormGroup({
    relationship : new FormControl('', [
      Validators.required
    ])
  });

  get relationStatus() {
    return this.relationshipStatus.get('relationship');
  }

  constructor(private obj: JsonCommanObjectService, private toastController: ToastController, private translate: TranslateService) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    this.gettingDriverNameFromSingleDriverObj = this.singleDriverObj.driverData.dName;

    console.log('Inside Driver-relationship Component : ', this.singleDriverObj);
   }

  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;
  }

  getDriverRelationshipNextClick() {
    const _relationship = this.relationStatus.value;
    this.singleDriverObj.driverData.dRelation = _relationship;
    console.log('Add another driver Relationship, NEXT on button click');
    console.log(this.singleDriverObj);
  }

  ngOnInit() {
    if (this.singleDriverObj.driverData.dRelation) {
      this.relationshipStatus.patchValue({
        relationship : this.singleDriverObj.driverData.dRelation
      });
      this.dropDownSelected = false;

    }
  }
  async getErrorTost() {
    this.translate.get('select.dropdown').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const toast = await this.toastController.create({
      message: this.modelText,
      duration: 2000
    });
    toast.present();
  }

}
