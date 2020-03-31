import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage implements OnInit {
  public singleCarObj;
  public selectedValue;
  public isDisabled = true;
  public select = false;
  modelText = '';
  vehicleInfo = new FormGroup({
    entryVehicle: new FormControl('')
  });
  constructor(private obj: JsonCommanObjectService, private router: Router,
              private translate: TranslateService,
              private toastController: ToastController,
              public loadingController: LoadingController) {
    this.singleCarObj = obj.carObjTemplate;
  }
  changeStatus(e) {
    this.selectedValue = e.target.value;
    this.select = true;
    console.log(this.selectedValue);
    if (this.selectedValue === 'year_make_model' || this.selectedValue === 'vin') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;

    }
  }

  vehicleBasicInfoNextClick() {
    if (this.selectedValue === 'year_make_model') {
      this.router.navigate(['/add-vehicle-by-year-make-model']);
    } else if (this.selectedValue === 'vin') {
      this.router.navigate(['/add-vehicle-by-vin']);
    }
  }

  ngOnInit() {
    this.loading();
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
    this.loadingController.dismiss('loading');
  }
  async loading() {
    const loading = await this.loadingController.create({
      message: '',
      id: 'loading'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
