import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-vehicle-by-vin',
  templateUrl: './add-vehicle-by-vin.page.html',
  styleUrls: ['./add-vehicle-by-vin.page.scss'],
})
export class AddVehicleByVinPage implements OnInit {
  public userEnteredVIN;
  public showVINErrorMSG = true;
  public isDisabled = false;
  public showInputFieldForVIN = true;
  public receivedVehicleDetailsFromVIN;
  public gettingDetailsByVIN = false;
  public hasError = false;
  modelText = '';

  public singleCarObj;

  public url = 'https://www.admin.veronicasquote.com/api/vin/decode';
  constructor(private obj: JsonCommanObjectService,
              public loadingController: LoadingController,
              private http: HttpClient,
              private router: Router,
              private translate: TranslateService) {
    this.singleCarObj = obj.carObjTemplate;
   }

   vehicleInfo = new FormGroup({

   vinNumber: new FormControl(''),

    year: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),

    make: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),

    model: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
  });
  // Validate VIN
  validateVIN(e) {
    this.hasError = false;
    this.userEnteredVIN = e.target.value;
    // tslint:disable-next-line: max-line-length
    const reg = /^(?<wmi>[A-HJ-NPR-Z\d]{3})(?<vds>[A-HJ-NPR-Z\d]{5})(?<check>[\dX])(?<vis>(?<year>[A-HJ-NPR-Z\d])(?<plant>[A-HJ-NPR-Z\d])(?<seq>[A-HJ-NPR-Z\d]{6}))$/;
    const result =  reg.test((this.userEnteredVIN));
    console.log(result);
    if (result) {
      this.loading();
      // this.loading.present()
      this.showVINErrorMSG = false;
      this.isDisabled = true;
      this.http.post(this.url, {"vin" : this.userEnteredVIN})
      .subscribe((response) => {
          console.log('Response From the server, decode the VIN : ');
          console.log(response);
          this.receivedVehicleDetailsFromVIN = response['decodedVin'];

          this.gettingDetailsByVIN = true; // Show details, on screen, get by API
          // this.showInputFieldForVIN = false;
          this.isDisabled = false;
          // this.dialog.closeAll();
          this.loadingController.dismiss('login');
          this.vehicleInfo.setValue({
            year : this.receivedVehicleDetailsFromVIN['year'],
            make : this.receivedVehicleDetailsFromVIN['make'],
            model : this.receivedVehicleDetailsFromVIN['model'],
            vinNumber : ''
          });
        },
        (error) => {
          // console.log("ERROR MSG:- ", error);
          if (error.error.hasError) {
            this.hasError = true;
            this.isDisabled = false;

            // this.dialog.closeAll();
            // Populate error message here
          }
        });
    } else {
      this.showVINErrorMSG = true;
    }

  }

  get year() {
    return this.vehicleInfo.get('year');
  }
  get make() {
    return this.vehicleInfo.get('make');
  }
  get model() {
    return this.vehicleInfo.get('model');
  }

  // NEXT-BTN CLICK
  vehicleBasicInfoNextClick() {

    this.singleCarObj.make = this.make.value;
    this.singleCarObj.model = this.model.value;
    this.singleCarObj.year = this.year.value;
    console.log('INSIDE VEHICLE BASIC INFO ADD NEXT BTN FUNCTION');
    console.log('Updated Object : ', this.singleCarObj);
  }

  ngOnInit() {
    if ((this.singleCarObj.year) !== '' && (this.singleCarObj.make) !== '' && (this.singleCarObj.model) !== '') {
      this.showVINErrorMSG = false;
      this.gettingDetailsByVIN = true;

      this.vehicleInfo.setValue({
      year : this.singleCarObj.year,
      make : this.singleCarObj.make,
      model : this.singleCarObj.model,
      vinNumber : ''
      });
    }
  }
  // async loading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Connexion ...',
  //     showBackdrop: true,
  //     id: 'login'
  //   });
  //   return await loading.present();
  // }
  async loading() {
    this.translate.get('popup.title2').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const loading = await this.loadingController.create({
      message: this.modelText,
      // name: "circular",
      backdropDismiss: true,
      // color: 'danger';
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
