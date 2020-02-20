import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-owner',
  templateUrl: './home-owner.page.html',
  styleUrls: ['./home-owner.page.scss'],
})
export class HomeOwnerPage implements OnInit {

  public finalObj;
  public selectedValue;
  public dropDownSelected = true;
  public select = false;
  modelText = '';
  homeOwnerStatusArray = [
    {status : 'YES', value : 'O'},
    {status: 'NO', value : 'R'}
  ];
  houseOwner = new FormGroup({
    owner : new FormControl('', [
      Validators.required
    ])
  });
  get homeOwnerStatus() {
    return this.houseOwner.get('owner');
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
    const homeOwnerStatus = this.homeOwnerStatus.value;
    console.log('HomeOwner selected value : ', homeOwnerStatus);
    this.finalObj.customer.customerData.homeOwner = homeOwnerStatus;
    console.log('getUserHomeOwnerStatusNextClick Function called');
    console.log(this.finalObj);
  }
  ngOnInit() {
    if ((this.finalObj.customer.customerData.homeOwner !== undefined) && (this.finalObj.customer.customerData.homeOwner !== '')) {
      this.houseOwner.patchValue({
        owner : this.finalObj.customer.customerData.homeOwner,
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
