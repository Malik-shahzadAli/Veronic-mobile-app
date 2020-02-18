import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
@Component({
  selector: 'app-add-another-vehicle',
  templateUrl: './add-another-vehicle.page.html',
  styleUrls: ['./add-another-vehicle.page.scss'],
})
export class AddAnotherVehiclePage implements OnInit {
  // abc = popup.title;
  public finalObjectSendToServer;
  modelText = '';
  public url = 'https://www.admin.veronicasquote.com/api/quote/generate';
  public stringifyFinalObject;
  public quoteData = {};
  public existingListOfCars;

  public newObject = {};
  anotherVehicle = new FormGroup({
    choose : new FormControl('')
  });
  constructor(public loadingController: LoadingController,
              private translate: TranslateService,
              private router: Router,
              private obj: JsonCommanObjectService,
              private http: HttpClient ) {
                this.finalObjectSendToServer = this.obj.customerDetails();
                this.existingListOfCars = this.finalObjectSendToServer.cars;
  }
  addAnotherVehicle(){
    console.log('Right After emplty Object ', this.finalObjectSendToServer);
    this.router.navigate(['/apply/add-vehicle']);
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
      id: 'alert'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  getQuote() {
    this.presentAlert();
    // routerLink = "/apply/get-a-quote"
    this.http.post(this.url, {'quoteData' : this.finalObjectSendToServer})
    .subscribe((response) => {
      console.log('Response from the server : ');
      console.log(response);
      this.obj.quotes = response;
      // this.router.navigate(['/apply/get-a-quote']);
      // this.presentAlert('alert').
      this.loadingController.dismiss('login');
    });
  }
}
