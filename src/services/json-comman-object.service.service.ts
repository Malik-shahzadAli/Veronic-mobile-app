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
            "maritalStatus": "",
            "homeOwner": "",
            "zipCode": "",
            "streetAddress": "",
            "dob": "",
            "edu": "",
            "isEmployed": "",
            "email": "",
            "phone" : ""
        },
        "customerIncidents": []
    },
    "cars": [],
    "drivers": []
};

public driverObjTemplate = {
  "driverData": {
      "dRelation": "",
      "dName": "",
      "dEdu": "",
      "isDEmployed": "",
      "dDob": ""
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

