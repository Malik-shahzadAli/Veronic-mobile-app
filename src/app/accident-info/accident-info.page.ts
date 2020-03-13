import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-accident-info',
  templateUrl: './accident-info.page.html',
  styleUrls: ['./accident-info.page.scss'],
})
export class AccidentInfoPage implements OnInit {

  public finalObj;
  public selectedValue;
  public dropDownSelected = true;
  public select = false;
  modelText = '';

  accidentStatusArray = [
    {status : 'YES', value : 'Y'},
    {status: 'NO', value : 'N'}
  ];
  accidentAsk = new FormGroup({
    accidentStatus : new FormControl('')
  });
  get accidentStatus() {
    return this.accidentAsk.get('accidentStatus');
  }
  constructor(private obj: JsonCommanObjectService,  private translate: TranslateService, private toastController: ToastController) {
    this.finalObj = this.obj.customerDetails();
    console.log('Inside Accident-Info Component : ', this.finalObj);
  }

   changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }

  getUserAccidentInfoStatusNextClick() {
    // const accidentStatus = this.accidentStatus.value;
    // console.log('Accident Info selected value : ', accidentStatus);
    this.finalObj.customer.customerIncidents.push({isCGuilty: this.selectedValue});
    console.log('getUserAccidentInfoStatusNextClick Function called');
    console.log(this.finalObj);
  }
  ngOnInit() {
    if (this.finalObj.customer.customerIncidents.length > 0) {
      this.accidentAsk.patchValue({
        accidentStatus : this.finalObj.customer.customerIncidents[0].isCGuilty,
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
