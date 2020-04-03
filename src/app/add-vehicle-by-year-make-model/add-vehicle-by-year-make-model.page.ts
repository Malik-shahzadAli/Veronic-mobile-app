import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
// import * as jquery from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { ToastController, IonContent } from '@ionic/angular';
import { url } from 'src/commonurl/commonurl';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-add-vehicle-by-year-make-model',
  templateUrl: './add-vehicle-by-year-make-model.page.html',
  styleUrls: ['./add-vehicle-by-year-make-model.page.scss'],
})
export class AddVehicleByYearMakeModelPage implements OnInit {

  public url = url.baseurl+'/api/get';
  public listOfModelyears;
  public listOfVehicleCompanies;
  public listOfVehicleModels;

  public singleCarObj;

  public vehicleMakeDisabled = true;
  public vehicleModelDisabled = true;
  public vehicleYearDisabled = true;

  public userChooseYear;
  public userChooseMake;

  public nextBtnEnableDisable = true;
  public select = false;
  modelText = '';
  public makeDisable = true;
  public modelDisable = true;

  constructor(private http: HttpClient, private obj: JsonCommanObjectService,
              private translate: TranslateService,
              private toastController: ToastController,
              public loadingController: LoadingController) {
    this.singleCarObj = obj.carObjTemplate;

  }

  vehicleInfo = new FormGroup({

    year: new FormControl('', [
      Validators.required
    ]),

    make: new FormControl('', [
      Validators.required
    ]),

    model: new FormControl('', [
      Validators.required
    ])
  });
  // GETTING LIST OF MAKE
  gettingMake(e) {
    this.userChooseYear = e.target.value;
    console.log('User Choose Year : ', this.userChooseYear);
    this.vehicleMakeDisabled = true;
    this.vehicleModelDisabled = true;

    this.nextBtnEnableDisable = true;
    // this.listOfVehicleCompanies = [''];
    // this.listOfVehicleModels = [''];
    this.vehicleInfo.patchValue({
      make : '',
      model : ''
      });

    this.http.get(this.url + '/makes/' + this.userChooseYear)
      .subscribe((response) => {
          console.log('Response From the server, List of Makes : ');
          console.log(response);
          this.listOfVehicleCompanies = response['makes'];
          this.vehicleMakeDisabled = false;
          this.makeDisable = false;
      });
  }
  //GETTING LIST OF MODELS
  gettingModel(e) {
    this.userChooseMake = e.target.value;
    this.nextBtnEnableDisable = true;

    console.log('User Choose Make : ', this.userChooseMake);

    this.vehicleModelDisabled = true;

    // this.listOfVehicleCompanies = [''];
    // this.listOfVehicleModels = [''];

    this.vehicleInfo.patchValue({
      model : ''
      });


    this.http.get(this.url + '/models/' + this.userChooseYear + '/' + this.userChooseMake)
      .subscribe((response) => {
          console.log('Response From the server, List of Models : ');
          console.log(response);
          this.listOfVehicleModels = response['models'];
          this.vehicleModelDisabled = false;
          this.modelDisable = false;
          // this.nextBtnEnableDisable = false;
      });
  }
  // USER CHOOSE VEHICLE
  chooseVehicle(e) {
    this.nextBtnEnableDisable = false;
    this.select = true;

  }

  get yearValue() {
    return this.vehicleInfo.get('year');
  }
  get makeValue() {
    return this.vehicleInfo.get('make');
  }
  get modelValue() {
    return this.vehicleInfo.get('model');
  }


   // NEXT-BTN CLICK
   vehicleBasicInfoNextClick() {

    this.singleCarObj.make = this.makeValue.value;
    this.singleCarObj.model = this.modelValue.value;
    this.singleCarObj.year = this.yearValue.value;
    console.log('INSIDE VEHICLE BASIC INFO ADD NEXT BTN FUNCTION');
    console.log('Updated Object : ', this.singleCarObj);
  }
  ngOnInit() {
    // this.removeSelectCaret('id');
    if ((this.singleCarObj.year) !== '' && (this.singleCarObj.make) !== '' && (this.singleCarObj.model) !== '') {
      console.log('Here is ....');
      console.log(this.singleCarObj);
      this.nextBtnEnableDisable = false;
      this.vehicleMakeDisabled = false;
      this.vehicleModelDisabled = false;

      this.listOfModelyears = [this.singleCarObj.year];
      this.listOfVehicleCompanies = [this.singleCarObj.make];
      this.listOfVehicleModels = [this.singleCarObj.model];

      this.vehicleInfo.patchValue({
      year : this.singleCarObj.year,
      make : this.singleCarObj.make,
      model : this.singleCarObj.model
      });
    } else {
      this.vehicleYearDisabled = true;
      console.log('NOT HERE');
      this.http.get(this.url + '/modelyears')
      .subscribe((response) => {
          console.log('Response From the server, Get modelyears : ');
          console.log(response);
          this.listOfModelyears = response['modelYears'];
          this.nextBtnEnableDisable = true;
          this.vehicleYearDisabled = false;
      });
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
  ionViewDidEnter(){
  }
  async loading2() {
    const loading = await this.loadingController.create({
      message: '',
      id: 'loading2'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  // async removeSelectCaret(id) {
  //   const select = await (window.document.querySelector(`#${id}`) as HTMLIonSelectElement).componentOnReady();
  //   select.shadowRoot.childNodes[1]['style'].display = 'none';
  // }
  // async removeMakeCaret(id) {
  //   const select = await (window.document.querySelector(`#${id}`) as HTMLIonSelectElement).componentOnReady();
  //   select.shadowRoot.childNodes[1]['style'].display = 'none';
  // }
  // async removeModelCaret(id) {
  //   const select = await (window.document.querySelector(`#${id}`) as HTMLIonSelectElement).componentOnReady();
  //   select.shadowRoot.childNodes[1]['style'].display = 'none';
  // }

}
