import { Component, OnInit } from '@angular/core';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-secondry-driver-info',
  templateUrl: './secondry-driver-info.component.html',
  styleUrls: ['./secondry-driver-info.component.scss'],
})
export class SecondryDriverInfoComponent implements OnInit {
  private singleDriverObj;

  public driverNameError = true;
  public nextBtnEnableDisable = true;
  modelText = '';
  primaryName = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get firstname() {
    return this.primaryName.get('firstName');
  }
  constructor(private obj: JsonCommanObjectService,
              private translate: TranslateService,
              private toastController: ToastController,
              public loadingController: LoadingController) {
    this.singleDriverObj = this.obj.driverObjTemplate; // Driver Object Template
    console.log('Service inside primary  constructor : ', this.singleDriverObj);
  }


  validateDriverName(e) {
    const userEnterDriverName = e.target.value;
    if (userEnterDriverName.length < 3) {
      this.driverNameError = true;
      this.nextBtnEnableDisable = true;
    } else {
      this.driverNameError = false;
      this.nextBtnEnableDisable = false;
    }
  }
  getUserNameNextClick() {
    const _firstName = this.firstname.value;
    // this.singleDriverObj.drivers.push({driverData : {dName : _firstName}})
    this.singleDriverObj.driverData.dFullName = _firstName;
    console.log('Add another driver, NEXT on button click');
    console.log(this.singleDriverObj);
  }
  ngOnInit() {
    this.loading2();
    if (this.singleDriverObj.driverData.dFullName) {
      this.driverNameError = false;
      this.nextBtnEnableDisable = false;
      this.primaryName.setValue({
        firstName : this.singleDriverObj.driverData.dFullName,
      });
    }
  }
  async getErrorTost() {
    this.translate.get('PRIMARY-NAME.error').
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
    this.loadingController.dismiss('loading2');
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
}
