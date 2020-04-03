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
            "gender": "",
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

public customerObj2 = {
  "quoteData": {
      "customer": {
          "customerData": {
              "firstName": "",
              "lastName": "",
              "postalAddress": {
                  "street": "",
                  "city": "",
                  "state": "",
                  "zip": ""
              },
              "email": "",
              "phone": ""
          }
      },
      "quoteSource": "PWA",
      "quoteType": ""
  }
};

public driverObjTemplate = {
  "driverData": {
    "dFullName": "",
    "dGender":"",
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
  quteData(){
    return this.customerObj2;
  }
}


