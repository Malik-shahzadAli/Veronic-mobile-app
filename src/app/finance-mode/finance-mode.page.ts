import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-finance-mode',
  templateUrl: './finance-mode.page.html',
  styleUrls: ['./finance-mode.page.scss'],
})
export class FinanceModePage implements OnInit {
  public singleCarObj;
  public selectedValue;
  public customerObject;
  public select = false;
  modelText = '';
  public dropDownSelected = true;

  financeStatusArray = [
    {status: 'I\'m currently making payments', value : 'Y'},
    {status : 'I\'m leasing', value : 'Y'},
    {status : 'It\'s paid off', value : 'N'}
  ];


  financeMode = new FormGroup({
    finance : new FormControl('', [
      Validators.required
    ])
  });
  get financeStatus() {
    return this.financeMode.get('finance');
  }
  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }

  constructor(private obj: JsonCommanObjectService, private translate: TranslateService, private toastController: ToastController ) {
    this.singleCarObj = obj.carObjTemplate;
    this.customerObject = obj.customerDetails();
    console.log('Hold Data : ', this.singleCarObj);
  }

  financeModeNextClick(){
    console.log('#### SingleCarTemplate', this.singleCarObj);
    const financeValue  = this.financeStatus.value;
    console.log('Finance-Value' , financeValue);
    this.singleCarObj.financeMode = financeValue;
    console.log('INSIDE FINANCE MODE NEXT BTN FUNCTION');
    console.log('Updated Object : ', this.singleCarObj);

    console.log('****************');
    console.log('Befor pushing cars into Array : ', this.customerObject.cars);
    this.customerObject.cars.push(this.singleCarObj);
    console.log('After pushing cars into Array : ', this.customerObject.cars);

    this.obj.carObjTemplate = {
                                "make": '',
                                "model": '',
                                "year": '',
                                "financeMode": '',
                                "dailyMileage": {
                                    "amount": '',
                                    "unit": 'mi'
                                }
                              };
    console.log('Final Object : ');
    console.log(this.customerObject);
  }

  ngOnInit() {
    this.dropDownSelected = true;
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
