import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-another-vehicle',
  templateUrl: './add-another-vehicle.page.html',
  styleUrls: ['./add-another-vehicle.page.scss'],
})
export class AddAnotherVehiclePage implements OnInit {
  // abc = popup.title;
  modelText = '';
  constructor(public loadingController: LoadingController, private translate: TranslateService) {
  }

  ngOnInit() {
  }

  async presentAlert() {
    this.translate.get('popup.title').
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
