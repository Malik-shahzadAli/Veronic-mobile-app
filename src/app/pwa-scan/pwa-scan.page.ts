import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodePicker, Camera, CameraAccess, CameraSettings, ScanResult, ScanSettings } from "scandit-sdk";
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { TranslateService } from '@ngx-translate/core';
// import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pwa-scan',
  templateUrl: './pwa-scan.page.html',
  styleUrls: ['./pwa-scan.page.scss'],
})
export class PwaScanPage implements OnInit {
  private finalObj;
  private modelText = '';
  public settings = new ScanSettings({ enabledSymbologies: [Barcode.Symbology.PDF417] });
  public viewfinder = 'viewfinder';
  // public cameraSetting =  CameraSettings;
  // public s = new ScanSettings({blurryRecognition:true})
  constructor(public router: Router, private toastController: ToastController,
              private obj: JsonCommanObjectService,  private translate: TranslateService, public loadingController: LoadingController) {
    this.finalObj = this.obj.customerDetails();
  }

  ngOnInit() {
    this.presentAlert();
    // const a = 'DASSHAHZAD';
    // console.log(a.slice(3,8));
    // setTimeout( () => {
      // alert("Hello");
      // this.navCtrl.back();
      // this.finalObj.customer.customerData.firstName = 'shahzad ali';
      // this.finalObj.customer.customerData.dob =  12 + '-' + 11 + '-' + 1997;
      // this.finalObj.customer.customerData.zipCode = 94043;
      // this.finalObj.customer.customerData.streetAddress = 'CA';
      // this.finalObj.customer.customerData.city = 'ABC';
      // this.finalObj.customer.customerData.state = 'state.slice(3)';
      // this.router.navigate(['/primary-name'], { replaceUrl: true});
    // }, 3000);
  }
  onScan(event) {
    console.log('scan completed');
    console.log('Result ===>');
    console.log(event.barcodes[0].data);
    this.parseData(event.barcodes[0].data);
    // alert(event.barcodes[0].data);
    // this.getErrorTost(event.barcodes[0].data);
    // this.router.navigate(['/primary-name']);
  }
  onInit() {
    console.log('on Init');
  }
  onSubmitFrame(event) {
    // console.log(event);
  }
  onProcessFrame(event) {
    // console.log(event);
  }
  onReady() {
    // Ready for scan...............
    console.log('On ready');
    this.loadingController.dismiss('alert');
  }
  onError(event) {
    console.log(event);
  }
  async getErrorTost(mess) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 10000
    });
    toast.present();
  }
  parseData(data) {
    const array = data.split('\n');
    console.log(array);
    let firstName, lastName, streetAddress, zipCode, state, city, dob, gender, country;
    for  (const line of array ) {
      if (line.startsWith('DCS')) {
        lastName = line;
      } else if (line.startsWith('DAC')) {
        firstName = line;
      } else if (line.startsWith('DAG')) {
        streetAddress = line;
      } else if (line.startsWith('DAK')) {
        zipCode = line;
      } else if (line.startsWith('DAJ')) {
        state = line;
      } else if (line.startsWith('DAI')) {
        city = line;
      } else if (line.startsWith('DBB')) {
        dob = line;
      } else if (line.startsWith('DBC')) {
        gender = line;
      } else if (line.startsWith('OCG')) {
        country = line;
      } 
    }
    if(!state || state.length<1){
      alert('Please scan a valid driving license')
    } else if (state.slice(3) !== 'CA' ) {
      alert('Sorry currently we only operate in California.');
      return;
    } else {
      const d = dob.slice(3);
      const month = d.slice(0, 2);
      const day = d.slice(2, 4);
      const year = d.slice(4);
      const gen= gender.slice(3,4);
      // alert(gen)
      if(gen === '1'){
        this.finalObj.customer.customerData.gender = 'M';
      }
      else{
        this.finalObj.customer.customerData.gender = 'F';
      }
      this.finalObj.customer.customerData.firstName = firstName.slice(3);
      this.finalObj.customer.customerData.lastName = lastName.slice(3);
      this.finalObj.customer.customerData.dob =  month + '-' + day + '-' + year;
      this.finalObj.customer.customerData.postalAddress.zip = zipCode.slice(3, 8);
      this.finalObj.customer.customerData.postalAddress.street = streetAddress.slice(3);
      this.finalObj.customer.customerData.postalAddress.city = city.slice(3);
      this.finalObj.customer.customerData.postalAddress.state = state.slice(3);
      this.router.navigate(['/primary-name'], { replaceUrl: true});
    }
  }

  async presentAlert() {
    this.translate.get('wait.title').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const loading = await this.loadingController.create({
      message: this.modelText,
      id: 'alert'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
