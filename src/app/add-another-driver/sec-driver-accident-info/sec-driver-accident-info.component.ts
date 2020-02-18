import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
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

  public selectedValue;
  public customerObject;
  accidentArray = [{status :'YES', value : 'Y'},{status: 'NO', value : 'N'}];

  accidentAsk = new FormGroup({
    accidentStatus : new FormControl('',[
      Validators.required
    ])
  })

  get accidentStatus (){ 
    return this.accidentAsk.get('accidentStatus');
  }

  constructor(private obj : JsonCommanObjectService) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    this.driverName = this.singleDriverObj.driverData.dName;

    this.customerObject = this.obj.customerDetails();

    console.log("Inside (Another driver) Accident-Info Component : ",this.singleDriverObj);
   }


  changeStatus(e) {
    
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;

  }

  getUserAccidentInfoStatusNextClick(){
    const accident_status = this.accidentStatus.value; 

    console.log("Accident Info selected value : ", accident_status);

    let info = {
      "dIncidentType": "507",
      "dIncidentTime": {
          "amount": 4,
          "unit": "yr"
      },
      "isDGuilty": accident_status
  }
    
    this.singleDriverObj.driverIncidents.push(info);
    console.log("****************");
    this.customerObject.drivers.push(this.singleDriverObj);
    console.log("Final Object : ");
    console.log(this.customerObject);

    this.obj.driverObjTemplate = {
      "driverData": {
          "dRelation": "",
          "dName": "",
          "dEdu": "",
          "isDEmployed": "",
          "dDob": ""
      },
      "driverIncidents": []
    }

    // console.log("getUserAccidentInfoStatusNextClick Function called");
    // console.log(this.singleDriverObj);
  }

  ngOnInit() {
    this.dropDownSelected = true;

    // if(this.singleDriverObj.driverIncidents.isDGuilty){

    //   this.accidentAsk.patchValue({
    //     accidentStatus : this.singleDriverObj.drivers.isDGuilty
    //   })
    // }
  }

}
