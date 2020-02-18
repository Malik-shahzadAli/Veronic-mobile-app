import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
@Component({
  selector: 'app-sec-driver-education',
  templateUrl: './sec-driver-education.component.html',
  styleUrls: ['./sec-driver-education.component.scss'],
})
export class SecDriverEducationComponent implements OnInit {

  public singleDriverObj;
  public dropDownSelected = true;
  public gettingDriverEducationFromSingleDriverObj;



  private selectedValue;
  public driverName;
 
  
  educationStatusArray = [{status: 'High school or GED', value : 'H'},{status : 'Associate degree | Certification | Diploma', value : 'A'},{status : 'Bachelor\'s degree', value : 'B'},{status : 'Graduate or professional degree', value : 'S'}];

  driverEducation = new FormGroup({
    education : new FormControl('',[
      Validators.required
    ])
  })

  get educationStatus (){ 
    return this.driverEducation.get('education');
  }

  constructor(private obj: JsonCommanObjectService ) {
    this.singleDriverObj = this.obj.driverObjTemplate;
    this.gettingDriverEducationFromSingleDriverObj = this.singleDriverObj.driverData.dEdu;
    this.driverName = this.singleDriverObj.driverData.dName;



    console.log("Inside Add another driver Education Component : ",this.singleDriverObj);
   }

   changeStatus(e) {
    
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.dropDownSelected = false;

  }

  getUserEducationNextClick(){
    const driver_education = this.educationStatus.value; 

    console.log("New Driver Education selected value : ", driver_education);
    
     

    this.singleDriverObj.driverData.dEdu = driver_education;
   
    console.log("getUserEducationNextClick Function called");
    console.log(this.singleDriverObj);
  }

  ngOnInit() {
    if(this.singleDriverObj.driverData.dEdu){

      this.driverEducation.patchValue({
        education : this.singleDriverObj.driverData.dEdu
      })
      this.dropDownSelected = false;

    }
  }

}
