import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import Quagga from 'quagga';
// import { ZXing } from '@zxing/library';
// import { BrowserQRCodeReader} from '@zxing/library';
// import { ScanditSdkModule } from 'scandit-sdk-angular';

// import scandit
import { ToastController } from '@ionic/angular';
declare var ZXing: any;
@Component({
  selector: 'app-first-splash',
  templateUrl: './first-splash.page.html',
  styleUrls: ['./first-splash.page.scss'],
})
// public declare  ZXing: any;
export class FirstSplashPage implements OnInit {
  
  // public settings = new ScanSettings({ enabledSymbologies: [Barcode.Symbology.CODE128] })
  constructor(private barcodeScanner: BarcodeScanner, private toastController: ToastController) { }


  ngOnInit() {
    // window.addEventListener('load', function () {
    // this.scan2();
    // })
  }
  scan2() {
    // window.addEventListener('load', () => {
    console.log('calling');
    this.getErrorTost('calling');
    let selectedDeviceId;
    const codeReader = new ZXing.BrowserMultiFormatReader();
    console.log('ZXing code reader initialized');
    this.getErrorTost('ZXing code reader initialized');
    codeReader.getVideoInputDevices()
      .then((videoInputDevices) => {
        const sourceSelect = document.getElementById('sourceSelect');
        selectedDeviceId = videoInputDevices[0].deviceId;
        if (videoInputDevices.length >= 1) {
          videoInputDevices.forEach((element) => {
            const sourceOption = document.createElement('option');
            sourceOption.text = element.label;
            sourceOption.value = element.deviceId;
            sourceSelect.appendChild(sourceOption);
          });

          sourceSelect.onchange = () => {
           // selectedDeviceId = sourceSelect.value;
          };

          const sourceSelectPanel = document.getElementById('sourceSelectPanel')
          sourceSelectPanel.style.display = 'block';
        }

        document.getElementById('startButton').addEventListener('click', () => {
          this.getErrorTost('Start Button click');
          codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
            if (result) {
              console.log(result);
              document.getElementById('result').textContent = result.text;
            }
            if (err && !(err instanceof ZXing.NotFoundException)) {
              console.error(err);
              document.getElementById('result').textContent = err;
            }
          });
          console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
        });

        document.getElementById('resetButton').addEventListener('click', () => {
          codeReader.reset();
          document.getElementById('result').textContent = '';
          console.log('Reset.');
        });

      })
      .catch((err) => {
        console.error(err);
      });
    // });
  }

  scan() {
    // this.barcodeScanner.scan().then(
    //   barcodeData => {
    //     console.log('Barcode data', barcodeData);
    //   }).catch(err => {
    //     this.getErrorTost(err);
    //     // console.log('Error', err);
    // },
    // );
    this.barcodeScanner.scan({
      // preferFrontCamera : true, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      // torchOn: true, // Android, launch with the torch switched on (if available)
      // saveHistory: true, // Android, save scan history (default false)
      prompt : 'Place a barcode inside the scan area', // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
      // orientation : 'landscape', // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
  }).then((result) =>{
    alert("We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);
}).catch((error) => {
  alert("Scanning failed: " + error);
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

