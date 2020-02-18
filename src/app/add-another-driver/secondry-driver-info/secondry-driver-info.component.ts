import { Component, OnInit } from '@angular/core';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondry-driver-info',
  templateUrl: './secondry-driver-info.component.html',
  styleUrls: ['./secondry-driver-info.component.scss'],
})
export class SecondryDriverInfoComponent implements OnInit {
  private singleDriverObj;

  public driverNameError = true;
  public nextBtnEnableDisable = true;

  primaryName= new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  })

  get firstname (){ 
    return this.primaryName.get('firstName');
  }
  
  constructor(private obj : JsonCommanObjectService) { 
    this.singleDriverObj = this.obj.driverObjTemplate; // Driver Object Template
    console.log("Service inside primary  constructor : ",this.singleDriverObj);
  }


  validateDriverName(e){
    let userEnterDriverName = e.target.value;
    if(userEnterDriverName.length < 3)
    {
      this.driverNameError = true;
      this.nextBtnEnableDisable = true;
    }
    else
    {
      this.driverNameError = false;
      this.nextBtnEnableDisable = false;

    }

  }

  getUserNameNextClick(){
    const _firstName = this.firstname.value; 
   


    // this.singleDriverObj.drivers.push({driverData : {dName : _firstName}})
    this.singleDriverObj.driverData.dName = _firstName;
    
    console.log("Add another driver, NEXT on button click");
    console.log(this.singleDriverObj);
  }

  ngOnInit(){
    if(this.singleDriverObj.driverData.dName){
      
      this.driverNameError = false;
      this.nextBtnEnableDisable = false;
      
      this.primaryName.setValue({
        firstName : this.singleDriverObj.driverData.dName,
      })
    }
    
  }


}
