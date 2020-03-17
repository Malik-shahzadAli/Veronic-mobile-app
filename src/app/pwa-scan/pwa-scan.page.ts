import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodePicker, Camera, CameraAccess, CameraSettings, ScanResult, ScanSettings } from "scandit-sdk";
import { Router } from '@angular/router';
@Component({
  selector: 'app-pwa-scan',
  templateUrl: './pwa-scan.page.html',
  styleUrls: ['./pwa-scan.page.scss'],
})
export class PwaScanPage implements OnInit {
  public settings = new ScanSettings({ enabledSymbologies: [Barcode.Symbology.PDF417] });
  constructor(public router: Router) { }

  ngOnInit() {
  }
  onScan(event) {
    // console.log(event);
    // this.getErrorTost(event);
    this.router.navigate(['/primary-name']);
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
    console.log('On ready');
  }
  onError(event) {
    console.log(event);
  }

}
