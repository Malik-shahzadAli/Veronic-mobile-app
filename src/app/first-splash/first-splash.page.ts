import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import Quagga from 'quagga';
// import { ZXing } from '@zxing/library';
// import { BrowserQRCodeReader} from '@zxing/library';
// import { ScanditSdkModule } from 'scandit-sdk-angular';

// import scandit
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
declare var ZXing: any;
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
@Component({
  selector: 'app-first-splash',
  templateUrl: './first-splash.page.html',
  styleUrls: ['./first-splash.page.scss'],
})
// public declare  ZXing: any;
export class FirstSplashPage implements OnInit {
  private finalObj;
  // public settings = new ScanSettings({ enabledSymbologies: [Barcode.Symbology.CODE128] })
  constructor(private barcodeScanner: BarcodeScanner, private toastController: ToastController,
              private obj: JsonCommanObjectService, public router: Router) {
    this.finalObj = this.obj.customerDetails();
   }


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
    this.parseData(result.text);
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
  parseData(data) {
    const array = data.split('\n');
    console.log(array);
    alert(array);
    let firstName, lastName, streetAddress, zipCode, state, city, dob, gender, country, licenseNo;
    for (const line of array ) {
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
      } else if (line.startsWith('DAQ')) {
        licenseNo = line;
      }
    }
    if (licenseNo === '') {
      alert('Please Scan a valid driving license.');
      return;
    } else if (state.slice(3) !== 'CA') {
      alert('Sorry currently we only operate in California.');
      return;
    } else {
      const d = dob.slice(3);
      const month = d.slice(0, 2);
      const day = d.slice(2, 4);
      const year = d.slice(4);
      this.finalObj.customer.customerData.firstName = firstName.slice(3);
      this.finalObj.customer.customerData.lastName = lastName.slice(3);
      this.finalObj.customer.customerData.dob =  month + '-' + day + '-' + year;
      this.finalObj.customer.customerData.zipCode = zipCode.slice(3, 8);
      this.finalObj.customer.customerData.streetAddress = streetAddress.slice(3);
      this.finalObj.customer.customerData.city = city.slice(3);
      this.finalObj.customer.customerData.state = state.slice(3);
      this.router.navigate(['/primary-name']);
    }
  }
}

