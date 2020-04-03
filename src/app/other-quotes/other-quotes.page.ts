import { Component, OnInit } from '@angular/core';
import { JsonCommanObjectService } from './../../services/json-comman-object.service.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-other-quotes',
  templateUrl: './other-quotes.page.html',
  styleUrls: ['./other-quotes.page.scss'],
})
export class OtherQuotesPage implements OnInit {
  public quoteId;
  public quotes;
  public modelText = "";
  constructor(private obj: JsonCommanObjectService, public alertController: AlertController,private translate: TranslateService) { }

  ngOnInit() {
    this.quotes = this.obj.quotes;
    this.quoteId = this.quotes.quote.quoteId;
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
}
