import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-vehicle-splash',
  templateUrl: './vehicle-splash.page.html',
  styleUrls: ['./vehicle-splash.page.scss'],
})
export class VehicleSplashPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
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
}
