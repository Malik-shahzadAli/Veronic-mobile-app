import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sec-driver-accident-info',
  templateUrl: './sec-driver-accident-info.component.html',
  styleUrls: ['./sec-driver-accident-info.component.scss'],
})
export class SecDriverAccidentInfoComponent implements OnInit {
  public singleDriverObj;
  public dropDownSelected = true;
  public gettingDriverAccidentInfoFromSingleDriverObj;
  public driverName;

  public select = false;
  public modelText = '';

  public selectedValue;
  public customerObject;
  accidentArray = [
    {status: 'YES', value : 'Y'},
    {status: 'NO', value : 'N'}
  ];
  accidentAsk = new FormGroup({
    accidentStatus : new FormControl('', [
      Validators.required
    ])
  });

  get accidentStatus() {
    return this.accidentAsk.get('accidentStatus');
  }

  constructor(private obj: JsonCommanObjectService,  private toastController: ToastController, private translate: TranslateService) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    this.driverName = this.singleDriverObj.driverData.dName;

    this.customerObject = this.obj.customerDetails();

    console.log('Inside (Another driver) Accident-Info Component : ', this.singleDriverObj);
   }


  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;
    this.select = true;

  }

  getUserAccidentInfoStatusNextClick() {
    const accidentStatus = this.accidentStatus.value;

    console.log('Accident Info selected value : ', accidentStatus);

    const info = {
      dIncidentType: '507',
      dIncidentTime: {
          amount: 4,
          unit: 'yr'
      },
      isDGuilty: accidentStatus
  };
    this.singleDriverObj.driverIncidents.push(info);
    this.customerObject.drivers.push(this.singleDriverObj);
    console.log(this.customerObject);

    this.obj.driverObjTemplate = {
      driverData: {
          dRelation: '',
          dName: '',
          dEdu: '',
          isDEmployed: '',
          dDob: ''
      },
      driverIncidents: []
    };
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
