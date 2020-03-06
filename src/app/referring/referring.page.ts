import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';

@Component({
  selector: 'app-referring',
  templateUrl: './referring.page.html',
  styleUrls: ['./referring.page.scss'],
})
export class ReferringPage implements OnInit {

  public finalObjectSendToServer;
  public url = 'https://www.admin.veronicasquote.com/api/quote/generate';
  public nextBtnEnableDisable = true;
  public select = false;
  public value;
  referringSomeone = new FormGroup({
    ref : new FormControl('')
  });
  get referringStatus() {
    return this.referringSomeone.get('ref');
  }
  constructor(private router: Router, private obj: JsonCommanObjectService, private http: HttpClient, ) {
    this.finalObjectSendToServer = this.obj.customerDetails();
  }
  changeStatus(e) {
    this.nextBtnEnableDisable = false;
    this.select = true;
    // console.log(e.target.value);
    this.value = e.target.value;
    // console.log(this.referringSomeone.value);
  }
  // GET QUOTE FROM SERVER
  getQuote() {
    // REMOVING STATE AND CITY FROM FINAL OBJECT
    delete this.finalObjectSendToServer.customer.customerData.city;
    delete this.finalObjectSendToServer.customer.customerData.state;
    delete this.finalObjectSendToServer.ref;
    // this.dialog.open(LoadingAlertComponent,{ disableClose: false, width : '400px' });
    this.http.post(this.url, {"quoteData" : this.finalObjectSendToServer})
    .subscribe((response) => {
      console.log('Response from the server : ');
      console.log(response);
      this.obj.quotes = response;
      // this.dialog.closeAll();
      this.router.navigate(['/get-a-quote']);
    },
    (err) => {
      // console.log("Error : ",err);
    });
  }
  // NEXT BUTTON CLICK
  nextButtonClick() { 
    // const referringSelectedValue = this.referringStatus.value;
    if (this.value === 'no') {
      this.getQuote();
    } else {
      this.router.navigate(['/referred-person']);
    }
  }
  ngOnInit() {}

}
