import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-first-splash',
  templateUrl: './first-splash.page.html',
  styleUrls: ['./first-splash.page.scss'],
})
export class FirstSplashPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private toastController: ToastController) { }


  ngOnInit() {
  }
  scan() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        console.log('Barcode data', barcodeData);
      }).catch(err => {
        this.getErrorTost(err);
        // console.log('Error', err);
    });
  }
  async getErrorTost(mess) {
 
    const toast = await this.toastController.create({
      message: mess,
      duration: 5000
    });
    toast.present();
  }
}

