import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonCommanObjectService {
  // public customerObj = {};
  public driver = 0;
  public carsIndex = -1;
  public customerObj = {
    "customer": {
        "customerData": {
            "firstName": "",
            "lastName": "",
            "gender": "M",
            "dob": "",
            "maritalStatus": "",
            "homeOwner": "",
            "education": "",
            "isEmployed": "",
            "postalAddress":{
              "street":"",
              "city":"",
              "state": "",
              "zip": ""
            },
            "email": "",
            "phone" : ""
        },
        "customerIncidents": []
    },
    "cars": [],
    "drivers": [],
    "ref" : {"fullName": '', "phoneNo" : ''},
    "quoteSource": 'PWA'
};

public driverObjTemplate = {
  "driverData": {
    "dFullName": "",
    "dGender":"M",
    "dDob": "",
    "dEducation": "",
    "isDEmployed": "",
    "dRelation": "",
  },
  "driverIncidents": []
};
public carObjTemplate = {
    "make": "",
    "model": "",
    "year": "",
    "financeMode": "",
    "dailyMileage": {
        "amount": "",
        "unit": "mi"
    }

};
public quotes = {};

  customerDetails() {
    return this.customerObj;
  }
  numberOfDrivers() {
    return this.driver;
  }
  singleDriverData() {
    return this.driverObjTemplate;
  }
  singleCarData() {
    return this.carObjTemplate;
  }
}

