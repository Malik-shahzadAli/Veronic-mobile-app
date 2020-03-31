import { Component, OnInit } from '@angular/core';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { url } from 'src/commonurl/commonurl';
@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.page.html',
  styleUrls: ['./get-a-quote.page.scss'],
})
export class GetAQuotePage implements OnInit {

  public url = url.baseurl+'/api/quotes/email';

  public quotes;
  public price: any[];
  public quoteId;
  public phone;
  public userEmail;
  public finalObjectSendToServer;
  public prices = ["48.94", "82.33", "105.34"];
  modelText = '';

  constructor(private obj: JsonCommanObjectService, private http: HttpClient,
              public loadingController: LoadingController,
              private translate: TranslateService,
              public alertController: AlertController ) {
    this.finalObjectSendToServer = this.obj.customerDetails();
    console.log('INSIDE GET QUOTE COMPONENT');
    console.log(this.finalObjectSendToServer);

   }

  sendEmail() {
  this.emailAlert();
  this.http.post(this.url, {'quoteId' : this.quoteId})
    .subscribe((response) => {
      console.log('Response After sending Email : ');
      console.log(response);
      // this.dialog.closeAll();
    });
    }
    agentPhone() {
      this.callAlert();
    }

  ngOnInit() {
    // this.quotes = this.obj.quotes;
    console.log('###### Inside get a quote compoonent ######');
    // console.log(this.quotes.quote);
    // this.price = this.quotes.quote.offers;
    // this.quoteId = this.quotes.quote.quoteId;
  }

  async callAlert() {
    this.translate.get('Quote.call').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const alert = await this.alertController.create({
      subHeader: this.modelText,
      message: `<a href="tel:(800) 639-3939">(800) 639-3939</a>`,
      buttons: ['OK']
    });
    await alert.present();
  }
  async emailAlert() {
    this.translate.get('Quote.email').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const alert = await this.alertController.create({
      subHeader: this.modelText,
      buttons: ['OK']
    });
    await alert.present();
  }

}
