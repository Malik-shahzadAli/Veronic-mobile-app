import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup ,FormControl , Validators} from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { ToastController } from '@ionic/angular';
// ToastController
@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  public finalObj;
  public selectedValue;
  public dropDownSelected = true;
  public select = false;
  modelText = '';
  homeOwnerStatusArray = [
    {status : 'MALE', value : 'M'},
    {status: 'FEMALE', value : 'F'}
  ];
  gender = new FormGroup({
    gender : new FormControl('', [
      Validators.required
    ])
  });
  get homeOwnerStatus() {
    return this.gender.get('owner');
  }
  constructor(private obj: JsonCommanObjectService, private translate: TranslateService, private toastController: ToastController ) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside HomeOwner Component : ', this.finalObj);
  }

  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }

  getUserHomeOwnerStatusNextClick() {
    // const homeOwnerStatus = this.homeOwnerStatus.value;
    // console.log('HomeOwner selected value : ', homeOwnerStatus);
    this.finalObj.customer.customerData.gender = this.selectedValue;
    console.log('getUserHomeOwnerStatusNextClick Function called');
    console.log(this.finalObj);
  }
  ngOnInit() {
    if ((this.finalObj.customer.customerData.homeOwner !== undefined) && (this.finalObj.customer.customerData.homeOwner !== '')) {
      this.gender.patchValue({
        owner : this.finalObj.customer.customerData.gender,
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